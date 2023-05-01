"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriasController = void 0;
const materias_value_1 = require("../../../../domain/Academico/comaterias/materias.value");
class MateriasController {
    MateriasUsesCases;
    constructor(MateriasUsesCases) {
        this.MateriasUsesCases = MateriasUsesCases;
    }
    GetAll = async (req, res) => {
        const { data, ok, status } = await this.MateriasUsesCases.listMaterias();
        return res.status(status).json({ data, ok });
    };
    createMateriasP = async (req, res) => {
        console.log('aca');
        const { data, ok, status } = await this.MateriasUsesCases.createMateriasP();
        return res.status(status).json({ data, ok });
    };
    PostMateria = async (req, res) => {
        const body = req.body;
        const Materiacrea = new materias_value_1.MateriaCreateValue(body);
        const { data, ok, status } = await this.MateriasUsesCases.storeMaterias(Materiacrea);
        return res.status(status).json({ data, ok });
    };
    showPermission = async (req, res, id) => {
        return res.json(id);
    };
    showMateria = async (req, res) => {
        const { id } = req.params;
        const { data, ok, status } = await this.MateriasUsesCases.showMateria(Number(id));
        return res.status(status).json({ data, ok });
    };
    showMateriaEdit = async (req, res) => {
        const { id } = req.params;
        const { data, ok, status } = await this.MateriasUsesCases.showMateriaEdit(Number(id));
        return res.status(status).json({ data, ok });
    };
    updatedMateria = async (req, res) => {
        const { id } = req.params;
        // console.log(req)
        const body = req.body;
        const Materiacrea = new materias_value_1.MateriaUpdatedValue(body);
        const resp = await this.MateriasUsesCases.updatedMateria(Materiacrea, Number(id));
        return res.json(resp);
    };
    delteMateria = async (req, res) => {
        const { id } = req.params;
        // const resp = await this.MateriasUsesCases.showMateria(Number(id));
        // await this.MateriasUsesCases.deleteMateria(Number(id));
        // return res.json({ mensaje: "Rol deleted" });
        const { data, ok, status } = await this.MateriasUsesCases.deleteMateria(Number(id));
        return res.status(status).json({ data, ok });
    };
}
exports.MateriasController = MateriasController;
//# sourceMappingURL=materia.controller.js.map