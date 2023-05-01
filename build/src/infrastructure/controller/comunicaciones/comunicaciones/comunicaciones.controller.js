"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComunicacionController = void 0;
const comunicaciones_value_1 = require("../../../../domain/Comunicaciones/comunicaciones/comunicaciones.value");
class ComunicacionController {
    ComunicacionesUsesCases;
    constructor(ComunicacionesUsesCases) {
        this.ComunicacionesUsesCases = ComunicacionesUsesCases;
    }
    GetAll = async (req, res) => {
        const { data, ok, status } = await this.ComunicacionesUsesCases.listComunicaciones();
        return res.status(status).json({ data, ok });
    };
    createComunicacionesP = async (req, res) => {
        console.log('aca');
        const { data, ok, status } = await this.ComunicacionesUsesCases.createComunicacionesP();
        return res.status(status).json({ data, ok });
    };
    PostComunicacion = async (req, res) => {
        const body = req.body;
        const Comunicacioncrea = new comunicaciones_value_1.ComunicacionCreateValue(body);
        // console.log('CREANDO')
        const { data, ok, status } = await this.ComunicacionesUsesCases.storeComunicaciones(Comunicacioncrea);
        return res.status(status).json({ data, ok });
    };
    showPermission = async (req, res, id) => {
        return res.json(id);
    };
    showComunicacion = async (req, res) => {
        const { id } = req.params;
        const { data, ok, status } = await this.ComunicacionesUsesCases.showComunicacione(Number(id));
        return res.status(status).json({ data, ok });
    };
    showComunicacionEdit = async (req, res) => {
        const { id } = req.params;
        const { data, ok, status } = await this.ComunicacionesUsesCases.showComunicacionEdit(Number(id));
        return res.status(status).json({ data, ok });
    };
    updatedComunicacion = async (req, res) => {
        const { id } = req.params;
        // console.log(req)
        const body = req.body;
        const Comunicacioncrea = new comunicaciones_value_1.ComunicacionUpdatedValue(body);
        const resp = await this.ComunicacionesUsesCases.updatedComunicacion(Comunicacioncrea, Number(id));
        return res.json(resp);
    };
    delteComunicacion = async (req, res) => {
        const { id } = req.params;
        // const resp = await this.ComunicacionesUsesCases.showComunicacion(Number(id));
        // await this.ComunicacionesUsesCases.deleteComunicacion(Number(id));
        // return res.json({ mensaje: "Rol deleted" });
        const { data, ok, status } = await this.ComunicacionesUsesCases.deleteComunicacion(Number(id));
        return res.status(status).json({ data, ok });
    };
}
exports.ComunicacionController = ComunicacionController;
//# sourceMappingURL=comunicaciones.controller.js.map