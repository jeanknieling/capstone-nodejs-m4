import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import categoryCreateService from "../../services/category/categoryCreate.service";

const categoryCreateController = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const category = await categoryCreateService({ name });

    return res.status(201).send(category);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default categoryCreateController;
