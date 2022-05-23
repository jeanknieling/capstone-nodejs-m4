import { Request, Response } from "express";
import categoryListService from "../../services/category/categoryList.service";

const categoryListController = async (req: Request, res: Response) => {
  try {
    const categories = await categoryListService();

    return res.status(200).send(categories);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default categoryListController;
