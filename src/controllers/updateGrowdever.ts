import { Request, Response} from 'express'
import { updateGrowdeverByUuid } from '../db/growdevers';
import { ValidationError } from '../models/growdever';

export const updateGrowdeverController = (req: Request, res: Response)=>{
    try {        
        const uuidToUpdate = req.params.uuid;
        const nameToUpdate = req.body.name;
        const growdeverUptaded = updateGrowdeverByUuid(uuidToUpdate, nameToUpdate )
       
        if (growdeverUptaded) {
            return res.status(200).json(growdeverUptaded)
        }
        return res.status(404).json({ message: 'Erro ao salvar growdever'})

    } catch (error) {
        if(error instanceof ValidationError) {
            return res.status(400).json({ message: 'Erro no dado enviado'})
        }

        return res.status(500).json({ message: 'Erro ao processar novo growdever'})
    }
}