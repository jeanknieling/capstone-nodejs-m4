import { Request, Response } from "express";
import categoryDeleteService from "../../services/category/categoryDelete.service";

const categoryDeleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const category = await categoryDeleteService(id);

    return res.status(200).json({ message: "Category deleted with sucess!" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default categoryDeleteController;
