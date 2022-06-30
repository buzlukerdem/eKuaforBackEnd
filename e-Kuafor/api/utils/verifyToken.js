import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";


// verifyToken ile login ...
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    // hata yoksa next diyerek userRoute da verify token bulunan kısma geçiyor
    next();
  });
};

// verifyUser ile update delete ... islemleri
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isMadmin) { // adminse veya id ler aynıysa silme işlemi yapabilir.
      next();
    } else {
      return next(createError(403, "You are not user authorized!"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isMadmin) {
      next();
    } else {
      return next(createError(403, "You are not admin authorized!"));
    }
  });
};