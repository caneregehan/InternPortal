import sql from "mssql";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {
  response500CodeProvider,
  responseProvider,
} from "../helpers/responseHelper.js";

export const loginUser = async (req, res) => {
  try {
    let user = null;

    const result = await new Promise((resolve, reject) => {
      new sql.Request().query(
        `SELECT * FROM users WHERE username = '${req.body.username}' AND role = '${req.body.role}'`,
        (err, result) => {
          if (err) {
            return response500CodeProvider(res);
          } else {
            resolve(result);
          }
        }
      );
    });

    if (result.recordset.length !== 0) {
      user = result.recordset[0];
    }

    if (!user) {
      return responseProvider(
        res,
        200,
        false,
        "Kullanici adi veya sifre hatali",
        null
      );
    }

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) {
      return responseProvider(
        res,
        200,
        false,
        "Kullanici adi veya sifre hatali",
        null
      );
    }

    const tokenPayload = {
      id: user.ID,
      username: user.username,
      role: user.role,
    };

    const accessToken = jwt.sign(
      tokenPayload,
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    const query =
      "UPDATE users SET token = @accessToken WHERE id = @userId";

    const request = new sql.Request();
    request.input(
      "accessToken",
      sql.NVarChar(255),
      accessToken
    );
    request.input("userId", sql.Int, user.ID);

    await request.query(query);

    delete user.password;

    return responseProvider(
      res,
      201,
      true,
      "Giris Basarili!",
      {
        token: accessToken,
        user: user,
      }
    );
  } catch (err) {
    console.log(err);
    return response500CodeProvider(res);
  }
};
