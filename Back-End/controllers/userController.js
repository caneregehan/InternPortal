import sql from "mssql";
import {
  response500CodeProvider,
  responseProvider,
} from "../helpers/responseHelper.js";
import bcrypt from "bcrypt";

export const getUsername = async (req, res) => {
  const { username } = req.params;

  if (!username) {
    return res
      .status(400)
      .send("Kullanıcı adı gereklidir.");
  }
  try {
    const request = new sql.Request();
    request.input("username", sql.VarChar, username);

    const result = await request.query(
      `SELECT * FROM users WHERE username = '${username}'`
    );

    if (result.recordset.length > 0) {
      return res
        .status(200)
        .send(
          "Kullanıcı adı bulunmaktadır. Şifrenizi hatırlamıyorsanız derin bir nefes alın."
        );
    } else {
      return res.status(404).send("Kullanıcı adı uygun.");
    }
  } catch (err) {
    console.error("Veritabanı hatası:", err);
    return res
      .status(500)
      .send(
        "Kullanıcı adı kontrol edilirken bir hata oluştu."
      );
  }
};

export const getAllUsers = (req, res) => {
  // getAllUsers adında bir fonksiyon oluştur ve req ve res parametrelerini al
  new sql.Request().query(
    // Yeni bir SQL isteği oluştur ve query metodu ile sorguyu çalıştır
    "SELECT * FROM users", // users tablosundan tüm kayıtları getir
    (err, result) => {
      // Eğer hata varsa reject ile hata döndür
      if (err) {
        // Eğer hata varsa
        console.error("Error executing query:", err); // Hata mesajını yazdır
        return response500CodeProvider(res); // 500 kodu döndür
      } else {
        // Eğer hata yoksa
        return responseProvider(
          // responseProvider fonksiyonunu çağır ve res, 200, true, "Kullanici Listesi getirildi" ve result.recordset parametrelerini al
          res,
          200,
          true,
          "Kullanici Listesi getirildi",
          result.recordset
        );
      }
    }
  );
};

export const getUserById = (req, res) => {
  // getUserById adında bir fonksiyon oluştur ve req ve res parametrelerini al
  const { id } = req.params; // id'yi al
  new sql.Request().query(
    // Yeni bir SQL isteği oluştur ve query metodu ile sorguyu çalıştır
    `SELECT * FROM users WHERE id = ${id}`, // users tablosundan id'si eşleşen kaydı getir
    (err, result) => {
      // Eğer hata varsa hata yazdır.
      if (err) {
        console.error("Error executing query:", err); // Hata mesajını yazdır
        return response500CodeProvider(res); // 500 kodu döndür
      } else {
        // Eğer hata yoksa
        return responseProvider(
          // responseProvider fonksiyonunu çağır ve res, 200, true, "Kullanici getirildi" ve result.recordset parametrelerini al
          res,
          200,
          true,
          "Kullanici getirildi",
          result.recordset
        );
      }
    }
  );
};

export const deleteUserById = (req, res) => {
  // deleteUserById adında bir fonksiyon oluştur ve req ve res parametrelerini al
  const { id } = req.params; // id'yi al
  new sql.Request().query(
    // Yeni bir SQL isteği oluştur ve query metodu ile sorguyu çalıştır
    `DELETE FROM users WHERE id = ${id}`, // users tablosundan id'si eşleşen kaydı sil
    (err, result) => {
      // Eğer hata varsa hata yazdır.
      if (err) {
        // Eğer hata varsa
        console.error("Error executing query:", err); // Hata mesajını yazdır
        return response500CodeProvider(res); // 500 kodu döndür
      } else {
        // Eğer hata yoksa
        return responseProvider(
          // responseProvider fonksiyonunu çağır ve res, 200, true, "Kullanici silindi" ve null parametrelerini al
          res,
          200,
          true,
          "Kullanici silindi",
          null
        );
      }
    }
  );
};

export const addUser = (req, res) => {
  //adduser fonksiyonu oluştur ve req ve res parametrelerini al
  const { password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  req.body.password = hash;

  new sql.Request().query(
    //sorgu oluştur ve query metodu ile sorguyu çalıştır
    `INSERT INTO users (name, password, role, department, uni_department, github, username) VALUES ('${req.body.name}', '${req.body.password}', 'intern', '${req.body.department}', '${req.body.uni_department}', '${req.body.github}', '${req.body.username}');`,
    //users tablosuna yeni kayıt ekle
    (err, result) => {
      //hata varsa hata yazdır
      if (err) {
        //hata varsa
        console.error("Error executing query:", err); //hata mesajını yazdır
        return response500CodeProvider(res); //500 kodu döndür
      } else {
        //hata yoksa
        return responseProvider(
          //response provider fonksiyonunu çağır ve res 201 true "Kullanici eklendi" ve null parametrelerini al
          res,
          201,
          true,
          "Kullanici eklendi",
          null
        );
      }
    }
  );
};

export const updateUser = (req, res) => {
  //updateUSer fonksiyonunu oluştur ve req ve res parametrelerini al
  const { id } = req.params; //idyi al
  const { password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  req.body.password = hash;

  new sql.Request().query(
    //yeni bir SQL isteği oluştur ve query metodu ile sorguyu çalıştır
    `UPDATE users SET name ='${req.body.name}', password ='${req.body.password}' WHERE id = ${id};`, // users tablosundan id eşleşen ile name ve password güncelle
    (err, result) => {
      //hata varsa hata yazdır
      if (err) {
        //hata varsa
        console.error("Error executing query:", err); //hata mesajını yazdır
        return response500CodeProvider(res); //500 kodu döndür
      } else {
        //hata yoksa
        return responseProvider(
          //responseProvider fonksiyonunu çağır ve res 200 kullancıı güncellendi ve null parametrelerini al
          res,
          200,
          true,
          "Kullanici guncellendi",
          null
        );
      }
    }
  );
};
