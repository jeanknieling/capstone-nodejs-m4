import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import buyCreateService from "../../services/buy/buyCreate.service";


const buyCreateController = async (req: Request, res: Response) => {

    try {
      const { userId } = req
      console.log("USER ID", userId)
      const buy = await buyCreateService(userId)

      return res.status(201).send(buy)
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res)
      }
    }

}

export default buyCreateController;