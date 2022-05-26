import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import categoryDeleteService from "../../services/category/categoryDelete.service";

const categoryDeleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const category = await categoryDeleteService(id);

    return res.status(200).send(category);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
    
  }
};

export default categoryDeleteController;
