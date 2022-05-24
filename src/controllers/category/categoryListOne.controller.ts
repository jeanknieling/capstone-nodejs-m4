import { Request, Response } from "express";
import categoryListOneService from "../../services/category/categoryListOne.service";

const categoryListOneController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const category = await categoryListOneService(id);

    return res.status(200).send(category);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default categoryListOneController;
