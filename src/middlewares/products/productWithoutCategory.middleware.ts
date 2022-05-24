import { NextFunction, Request, Response } from "express";

const productWithoutCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { category } = req.body;

  if (!category) {
    return res.status(400).json({
      error: "Error",
      message: "Category was not informed"
    });
  }

  next();
};

export default productWithoutCategory;
