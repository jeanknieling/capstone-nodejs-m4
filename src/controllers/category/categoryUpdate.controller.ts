import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import categoryUpdateService from "../../services/category/categoryUpdate.service";

const categoryUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, discount_value } = req.body;

    const category = await categoryUpdateService(id, name, discount_value);

    return res.status(200).send(category);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default categoryUpdateController;
