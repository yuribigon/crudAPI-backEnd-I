import { Request, Response} from 'express'
import { insertGrowdever } from '../db/growdevers';
import { Growdever, ValidationError } from '../models/growdever';

export const createGrowdeverController = (req: Request, res: Response)=>{

    try {
        const name = req.body.name;
        const newGrowdever = new Growdever(name);
        const insertedUuid = insertGrowdever(newGrowdever);
        
        if (insertedUuid){
            res.json(newGrowdever);
        }

        return res.status(500).json({ message: 'Erro ao salvar growdever'})
        
    } catch (error) {
        if(error instanceof ValidationError) {
            return res.status(400).json({ message: 'Erro no dado enviado'})
        }

        return res.status(500).json({ message: 'Erro ao processar novo growdever'})
    }
    
}