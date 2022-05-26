import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  jwt.verify(
    token as string,
    process.env.JWT_SECRET as string,
    (err: any, decoded: any) => {
      if (err) {
        return res
          .status(401)
          .json({ message: "Invalid Token or missing token" });
      }

      req.userId = decoded.id;
      req.userIsAdm = decoded.isAdm;

      next();
    }
  );
};

export const verifyisAdmMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  jwt.verify(
    token as string,
    process.env.JWT_SECRET as string,
    (err: any, decoded: any) => {
      req.userId = decoded.id;
      req.userIsAdm = decoded.isAdm;
      if (req.userIsAdm === true) {
        return next();
      }
      return res.status(401).json({ message: "Unauthorized" });
    }
  );
};
