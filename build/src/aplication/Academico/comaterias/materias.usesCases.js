"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriasUsesCases = void 0;
const materias_value_1 = require("../../../domain/Academico/comaterias/materias.value");
class MateriasUsesCases {
    materiasRepository;
    constructor(materiasRepository) {
        this.materiasRepository = materiasRepository;
    }
    async listMaterias() {
        const resp = await this.materiasRepository.findAllMaterias();
        return resp;
    }
    async createMateriasP() {
        const resp = await this.materiasRepository.createMateriasP();
        return resp;
    }
    async createMaterias() {
        const resp = await this.materiasRepository.createMateriasP();
    }
    async storeMaterias(body) {
        const MateriaValue = new materias_value_1.MateriaCreateValue({ ...body });
        const resp = this.materiasRepository.storeMaterias(MateriaValue);
        return resp;
    }
    showMateria(id) {
        const resp = this.materiasRepository.showMateria(id);
        return resp;
    }
    showMateriaEdit(id) {
        const resp = this.materiasRepository.showMateriaEdit(id);
        return resp;
    }
    updatedMateria(body, id) {
        const MateriaValue = new materias_value_1.MateriaUpdatedValue({ ...body });
        const resp = this.materiasRepository.updatedMateria(MateriaValue, id);
        return resp;
    }
    deleteMateria(id) {
        const resp = this.materiasRepository.deleteMateria(id);
        return resp;
    }
}
exports.MateriasUsesCases = MateriasUsesCases;
//# sourceMappingURL=materias.usesCases.js.map