"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursosUsesCases = void 0;
const cursos_value_1 = require("../../../domain/Academico/cocursos/cursos.value");
class CursosUsesCases {
    cursosRepository;
    constructor(cursosRepository) {
        this.cursosRepository = cursosRepository;
    }
    async listCursos() {
        const resp = await this.cursosRepository.findAllCursos();
        return resp;
    }
    async createCursosP() {
        const resp = await this.cursosRepository.createCursosP();
        return resp;
    }
    async createCursos() {
        const resp = await this.cursosRepository.createCursosP();
    }
    async storeCursos(body) {
        const CursoValue = new cursos_value_1.CursoCreateValue({ ...body });
        const resp = this.cursosRepository.storeCursos(CursoValue);
        return resp;
    }
    showCurso(id) {
        const resp = this.cursosRepository.showCurso(id);
        return resp;
    }
    showCursoEdit(id) {
        const resp = this.cursosRepository.showCursoEdit(id);
        return resp;
    }
    updatedCurso(body, id) {
        const CursoValue = new cursos_value_1.CursoUpdatedValue({ ...body });
        const resp = this.cursosRepository.updatedCurso(CursoValue, id);
        return resp;
    }
    deleteCurso(id) {
        const resp = this.cursosRepository.deleteCurso(id);
        return resp;
    }
}
exports.CursosUsesCases = CursosUsesCases;
//# sourceMappingURL=cursos.usesCases.js.map