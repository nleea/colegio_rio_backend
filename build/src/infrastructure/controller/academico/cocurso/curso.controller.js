"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursosController = void 0;
const cursos_value_1 = require("../../../../domain/Academico/cocursos/cursos.value");
class CursosController {
    CursosUsesCases;
    constructor(CursosUsesCases) {
        this.CursosUsesCases = CursosUsesCases;
    }
    GetAll = async (req, res) => {
        const { data, ok, status } = await this.CursosUsesCases.listCursos();
        return res.status(status).json({ data, ok });
    };
    createCursosP = async (req, res) => {
        console.log('aca');
        const { data, ok, status } = await this.CursosUsesCases.createCursosP();
        return res.status(status).json({ data, ok });
    };
    PostCurso = async (req, res) => {
        const body = req.body;
        const Cursocrea = new cursos_value_1.CursoCreateValue(body);
        const { data, ok, status } = await this.CursosUsesCases.storeCursos(Cursocrea);
        return res.status(status).json({ data, ok });
    };
    showPermission = async (req, res, id) => {
        return res.json(id);
    };
    showCurso = async (req, res) => {
        const { id } = req.params;
        const { data, ok, status } = await this.CursosUsesCases.showCurso(Number(id));
        return res.status(status).json({ data, ok });
    };
    showCursoEdit = async (req, res) => {
        const { id } = req.params;
        const { data, ok, status } = await this.CursosUsesCases.showCursoEdit(Number(id));
        return res.status(status).json({ data, ok });
    };
    updatedCurso = async (req, res) => {
        const { id } = req.params;
        // console.log(req)
        const body = req.body;
        const Cursocrea = new cursos_value_1.CursoUpdatedValue(body);
        const resp = await this.CursosUsesCases.updatedCurso(Cursocrea, Number(id));
        return res.json(resp);
    };
    delteCurso = async (req, res) => {
        const { id } = req.params;
        // const resp = await this.CursosUsesCases.showCurso(Number(id));
        // await this.CursosUsesCases.deleteCurso(Number(id));
        // return res.json({ mensaje: "Rol deleted" });
        const { data, ok, status } = await this.CursosUsesCases.deleteCurso(Number(id));
        return res.status(status).json({ data, ok });
    };
}
exports.CursosController = CursosController;
//# sourceMappingURL=curso.controller.js.map