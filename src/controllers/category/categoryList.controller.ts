import { Request, Response } from "express";
import categoryListService from "../../services/category/categoryList.service";

const categoryListController = async (req: Request, res: Response) => {
  try {
    const categorys = await categoryListService();

    return res.send(categorys);
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
