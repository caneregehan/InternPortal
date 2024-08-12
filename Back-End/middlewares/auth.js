import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Yetkisiz giriş yapılmışsa 401 ver
  if (!authHeader) {
    return res.status(401).json({
      status: "fail",
      message: "Unauthorized!",
    });
  }

  const token = authHeader.split(" ")[1];

  // Token yoksa 401 ver
  if (!token) {
    return res.status(401).json({
      status: "fail",
      message: "Unauthorized!",
    });
  }

  try {
    // Secret Key  kullanarak tokeni doğrula
    const user = jwt.verify(token, process.env.JWT_SECRET);

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      status: "fail",
      message: "Unauthorized!",
    });
  }
};
