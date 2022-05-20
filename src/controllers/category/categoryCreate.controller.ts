import { Request, Response } from "express";
import categoryCreateService from "../../services/category/categoryCreate.service";

const categoryCreateController = async (req: Request, res: Response) => {
  try {
    const { name, discount_value } = req.body;

    const newCategory = await categoryCreateService({
      name,
      discount_value,
     
    });

    return res.status(201).send(newCategory);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default categoryCreateController;
