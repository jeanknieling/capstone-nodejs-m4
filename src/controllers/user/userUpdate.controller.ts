<<<<<<< HEAD
import { Request, Response } from "express";

import userUpdateService from "../../services/user/userUpdade.service";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { name, password } = req.body;

    const user = await userUpdateService(id, name, password);

    return res.status(200).json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userUpdateController;
=======
import { Request, Response } from "express";

import userUpdateService from "../../services/user/userUpdade.service";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { nickname, password } = req.body;

    const user = await userUpdateService(id, nickname, password);

    return res.status(200).json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userUpdateController;
>>>>>>> feature/yupProducts
