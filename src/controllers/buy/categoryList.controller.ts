import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import categoryListService from "../../services/category/categoryList.service";

const categoryListController = async (req: Request, res: Response) => {
  try {
    const categories = await categoryListService();

    return res.status(200).send(categories);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default categoryListController;
