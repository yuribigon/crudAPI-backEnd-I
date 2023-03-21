"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Growdever = exports.ValidationError = void 0;
const uuid_1 = require("uuid");
class ValidationError extends Error {
}
exports.ValidationError = ValidationError;
class Growdever {
    constructor(name, status = 'MATRICULADO', skills = []) {
        this.name = name;
        this.status = status;
        this.skills = skills;
        this.setName(name);
        this.uuid = (0, uuid_1.v4)();
    }
    getUuid() {
        return this.uuid;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        if (name.split(' ').length < 2)
            throw new ValidationError('Nome inválido');
        this.name = name;
    }
    getStatus() {
        return this.status;
    }
    getSkills() {
        return this.skills;
    }
    setSkills(skill) {
        this.skills.push(skill);
    }
}
exports.Growdever = Growdever;
//# sourceMappingURL=growdever.js.map