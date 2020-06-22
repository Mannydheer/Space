import { Request, Response, NextFunction } from 'express';
import { currentIssPositionService } from './spaceService';
export const currentIssPositionController = async (req: Request, res: Response, next: NextFunction) => {


    try {

        let serviceResponse = await currentIssPositionService();
        if (!serviceResponse) {
            throw new Error("502 bad request.")
        }
    }
    catch (error) {
        next(error)
    }






}



