"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectGrowdeversByFilter = exports.updateGrowdeverByUuid = exports.deleteByUuid = exports.selectGrowdeverByUuid = exports.insertGrowdever = exports.selectAllGrowdevers = void 0;
const growdever_1 = require("../models/growdever");
let growdevers = [
    new growdever_1.Growdever('Yuri Bigon'),
    new growdever_1.Growdever('Giovanna Lopes'),
    new growdever_1.Growdever('Sol LB'),
    new growdever_1.Growdever('Pipoca LB'),
    new growdever_1.Growdever('Arthur Pessoa'),
    new growdever_1.Growdever('Jonathan Spinelli'),
];
const selectAllGrowdevers = () => growdevers;
exports.selectAllGrowdevers = selectAllGrowdevers;
const insertGrowdever = (growdever) => {
    try {
        growdevers.push(growdever);
        return growdever.getUuid();
    }
    catch (error) {
        console.log('Erro ao salvar growdever', error);
    }
};
exports.insertGrowdever = insertGrowdever;
const selectGrowdeverByUuid = (uuidFilter) => {
    return growdevers.find((growdever) => growdever.getUuid() === uuidFilter);
};
exports.selectGrowdeverByUuid = selectGrowdeverByUuid;
const deleteByUuid = (uuidToRemove) => {
    const growdeversUptaded = growdevers.filter((growdever) => growdever.getUuid() !== uuidToRemove);
    const removed = growdevers.length > growdeversUptaded.length;
    growdevers = growdeversUptaded;
    return removed;
};
exports.deleteByUuid = deleteByUuid;
const updateGrowdeverByUuid = (uuidToUpdate, nameToUpdate) => {
    const growdeverToUpdate = growdevers.find((growdever) => growdever.getUuid() === uuidToUpdate);
    growdeverToUpdate === null || growdeverToUpdate === void 0 ? void 0 : growdeverToUpdate.setName(nameToUpdate);
    return growdeverToUpdate === null || growdeverToUpdate === void 0 ? void 0 : growdeverToUpdate.getName();
};
exports.updateGrowdeverByUuid = updateGrowdeverByUuid;
const selectGrowdeversByFilter = (nameFilter, statusFilter) => {
    const filteredGrowdever = growdevers.filter((growdever) => {
        const nameMatches = nameFilter
            ? growdever.getName().toLowerCase().indexOf(nameFilter.toLowerCase()) >= 0
            : true;
        const statusMatches = statusFilter
            ? growdever.getStatus() === statusFilter.toUpperCase()
            : true;
        return nameMatches && statusMatches; // && duas condições verdadeiras, retorno true
    });
    return filteredGrowdever;
};
exports.selectGrowdeversByFilter = selectGrowdeversByFilter;
//# sourceMappingURL=growdevers.js.map