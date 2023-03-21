"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGrowdeverController = void 0;
const growdevers_1 = require("../db/growdevers");
const growdever_1 = require("../models/growdever");
const updateGrowdeverController = (req, res) => {
    try {
        const uuidToUpdate = req.params.uuid;
        const nameToUpdate = req.body.name;
        //const skillToAdd = req.body.skill;
        const growdeverUptaded = (0, growdevers_1.updateGrowdeverByUuid)(uuidToUpdate, nameToUpdate);
        if (growdeverUptaded) {
            return res.status(200).json(growdeverUptaded);
        }
        return res.status(404).json({ message: 'Erro ao salvar growdever' });
    }
    catch (error) {
        if (error instanceof growdever_1.ValidationError) {
            return res.status(400).json({ message: 'Erro no dado enviado' });
        }
        return res.status(500).json({ message: 'Erro ao processar novo growdever' });
    }
};
exports.updateGrowdeverController = updateGrowdeverController;
//# sourceMappingURL=updateGrowdever.js.map