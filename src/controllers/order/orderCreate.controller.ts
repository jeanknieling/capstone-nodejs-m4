import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import buyCreateService from "../../services/buy/buyCreate.service";
import orderCreateService from "../../services/order/orderCreate.service";


const orderCreateController = async (req: Request, res: Response) => {

    const {productId} = req.body; 
   const userId = req.userId
    
    const productsOrder = await orderCreateService(productId, userId )
    
    return res.status(201).send(productsOrder);

};

export default orderCreateController;
