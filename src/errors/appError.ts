import { Response } from "express";

// export class AppError extends Error {
export class AppError{
  // statusCode;
  public readonly message : string;
  public readonly statusCode : number;
  
  constructor(statusCode: number, message: string) {
    // super();
    this.statusCode = statusCode;
    this.message = message;
  }
 
}

export const handleError = (err: AppError, res: Response) => {
  const { statusCode, message } = err;

  return res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};