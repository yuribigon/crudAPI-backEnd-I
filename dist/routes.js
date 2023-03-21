"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const createGrowdever_1 = require("./controllers/createGrowdever");
const deleteGrowdever_1 = require("./controllers/deleteGrowdever");
const getGrowdevers_1 = require("./controllers/getGrowdevers");
const getGrowdeversBYUuid_1 = require("./controllers/getGrowdeversBYUuid");
const updateGrowdever_1 = require("./controllers/updateGrowdever");
function registerRoutes(app) {
    app.get('/growdevers', getGrowdevers_1.getGrowdeverController);
    app.get('/growdevers/:uuid', getGrowdeversBYUuid_1.getGrowdeverByUuidController);
    //app.post('/growdevers', (req: Request, res: Response) => {})
    app.post('/growdevers', createGrowdever_1.createGrowdeverController);
    app.put('/growdevers/:uuid', updateGrowdever_1.updateGrowdeverController);
    app.delete('/growdevers/:uuid', deleteGrowdever_1.deleteGrowdeverController);
}
exports.registerRoutes = registerRoutes;
//# sourceMappingURL=routes.js.map