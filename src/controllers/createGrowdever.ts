import { Request, Response} from 'express'
import { insertGrowdever } from '../db/growdevers';
import { ValidationError } from '../exceptions/validationError';
import { Growdever } from '../models/growdever';

export const createGrowdeverController = (req: Request, res: Response)=>{

    try {
        const newGrowdever = req.body.growdeverToCreate
        const insertedUuid = insertGrowdever(newGrowdever);
        
        if (insertedUuid){
            res.json(newGrowdever);
        }

    } catch (error) {
        if(error instanceof ValidationError) {
            return res.status(400).json({ message: 'Erro no dado enviado'})
        }

        return res.status(500).json({ message: 'Erro ao processar novo growdever'})
    }
    
}