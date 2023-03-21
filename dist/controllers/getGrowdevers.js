"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrowdeverController = void 0;
const growdevers_1 = require("../db/growdevers");
const getGrowdeverController = (req, res) => {
    const nameFilter = req.query.name;
    if (typeof nameFilter !== 'string' && nameFilter !== undefined) {
        return res.status(400).json({ message: 'Erro' });
    }
    const statusFilter = req.query.status;
    if (typeof statusFilter !== 'string' && statusFilter !== undefined) {
        return res.status(400).json({ message: 'Erro' });
    }
    const allGrowdevers = (0, growdevers_1.selectGrowdeversByFilter)(nameFilter, statusFilter);
    res.json(allGrowdevers);
};
exports.getGrowdeverController = getGrowdeverController;
//# sourceMappingURL=getGrowdevers.js.map