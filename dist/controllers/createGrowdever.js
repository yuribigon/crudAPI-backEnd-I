"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGrowdeverController = void 0;
const growdevers_1 = require("../db/growdevers");
const growdever_1 = require("../models/growdever");
const createGrowdeverController = (req, res) => {
    try {
        const name = req.body.name;
        const newGrowdever = new growdever_1.Growdever(name);
        const insertedUuid = (0, growdevers_1.insertGrowdever)(newGrowdever);
        if (insertedUuid) {
            res.json(newGrowdever);
        }
        return res.status(500).json({ message: 'Erro ao salvar growdever' });
    }
    catch (error) {
        if (error instanceof growdever_1.ValidationError) {
            return res.status(400).json({ message: 'Erro no dado enviado' });
        }
        return res.status(500).json({ message: 'Erro ao processar novo growdever' });
    }
};
exports.createGrowdeverController = createGrowdeverController;
//# sourceMappingURL=createGrowdever.js.map