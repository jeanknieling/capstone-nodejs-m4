import { Request, Response } from "express";
import categoryUpdateService from "../../services/category/categoryUpdate.service";

const categoryUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { name, discount_value } = req.body;

    const category = await categoryUpdateService(
      parseInt(id),
      name,
      discount_value
    );

    return res.status(201).json({ message: "Category updated!" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default categoryUpdateController;
