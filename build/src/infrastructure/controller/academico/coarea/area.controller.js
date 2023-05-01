"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaController = void 0;
const areas_value_1 = require("../../../../domain/Academico/coareas/areas.value");
class AreaController {
    AreasUsesCases;
    constructor(AreasUsesCases) {
        this.AreasUsesCases = AreasUsesCases;
    }
    GetAll = async (req, res) => {
        const { data, ok, status } = await this.AreasUsesCases.listAreas();
        return res.status(status).json({ data, ok });
    };
    createAreasP = async (req, res) => {
        console.log('aca');
        const { data, ok, status } = await this.AreasUsesCases.createAreasP();
        return res.status(status).json({ data, ok });
    };
    PostArea = async (req, res) => {
        const body = req.body;
        const Areacrea = new areas_value_1.AreaCreateValue(body);
        const { data, ok, status } = await this.AreasUsesCases.storeAreas(Areacrea);
        return res.status(status).json({ data, ok });
    };
    showPermission = async (req, res, id) => {
        return res.json(id);
    };
    showArea = async (req, res) => {
        const { id } = req.params;
        const { data, ok, status } = await this.AreasUsesCases.showArea(Number(id));
        return res.status(status).json({ data, ok });
    };
    showAreaEdit = async (req, res) => {
        const { id } = req.params;
        const { data, ok, status } = await this.AreasUsesCases.showAreaEdit(Number(id));
        return res.status(status).json({ data, ok });
    };
    updatedArea = async (req, res) => {
        const { id } = req.params;
        // console.log(req)
        const body = req.body;
        const Areacrea = new areas_value_1.AreaUpdatedValue(body);
        const resp = await this.AreasUsesCases.updatedArea(Areacrea, Number(id));
        return res.json(resp);
    };
    delteArea = async (req, res) => {
        const { id } = req.params;
        // const resp = await this.AreasUsesCases.showArea(Number(id));
        // await this.AreasUsesCases.deleteArea(Number(id));
        // return res.json({ mensaje: "Rol deleted" });
        const { data, ok, status } = await this.AreasUsesCases.deleteArea(Number(id));
        return res.status(status).json({ data, ok });
    };
}
exports.AreaController = AreaController;
//# sourceMappingURL=area.controller.js.map