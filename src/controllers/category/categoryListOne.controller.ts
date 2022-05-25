import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import categoryListOneService from "../../services/category/categoryListOne.service";

const categoryListOneController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const category = await categoryListOneService(id);

    return res.status(200).send(category);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default categoryListOneController;
