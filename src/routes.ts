import { createGrowdeverController } from './controllers/createGrowdever';
import { deleteGrowdeverController } from './controllers/deleteGrowdever';
import { getGrowdeverController } from './controllers/getGrowdevers';
import { getGrowdeverByUuidController } from './controllers/getGrowdeverByUuid';
import { updateGrowdeverController } from './controllers/updateGrowdever';
import { Express } from 'express';
import { addSkillGrowdeverController } from './controllers/addSkillGrowdever';
import { deleteSkillGrowdeverController } from './controllers/deleteSkillGrowdever';

export function registerRoutes(app : Express){

    //GET ALL
    app.get('/growdevers', getGrowdeverController)

    //GET ID
    app.get('/growdevers/:uuid', getGrowdeverByUuidController)

    //ADD GROWDEVER
    //app.post('/growdevers', (req: Request, res: Response) => {})
    app.post('/growdevers', createGrowdeverController)

    // ADD SKILL
    app.put('/growdever/:uuid/add-skills', addSkillGrowdeverController)
    
    // REMOVE SKILL
    app.put('/growdever/:uuid/remove-skills', deleteSkillGrowdeverController)
    
    // UPDATE NAME
    app.put('/growdevers/:uuid', updateGrowdeverController)
    
    // DELETE GROWDEVER
    app.delete('/growdevers/:uuid', deleteGrowdeverController)
}