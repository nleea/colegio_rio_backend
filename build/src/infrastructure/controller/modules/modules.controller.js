"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulesController = void 0;
class ModulesController {
    modulesUsesCases;
    constructor(modulesUsesCases) {
        this.modulesUsesCases = modulesUsesCases;
    }
    getAll = async (req, res) => {
        const { data, ok, status } = await this.modulesUsesCases.listModules();
        return res.status(status).json({ ok, data });
    };
    insertModules = async (req, res) => {
        const { moduleValues, rolId } = req.body;
        //const moduleValues = new ModulesValue({ ...moduleValue });
        const { data, ok, status } = await this.modulesUsesCases.createModules(rolId, moduleValues);
        return res.status(status).json({ ok, data });
    };
    deleteModulos = async (req, res) => {
        const { rolId, modulos, rolName } = req.body;
        const { data, ok, status } = await this.modulesUsesCases.deleteModules(rolId, rolName, modulos);
        return res.status(status).json({ ok, data });
    };
    createModuleshasRole = async (req, res) => {
        const { rolId, modulos } = req.body;
        const { data, ok, status } = await this.modulesUsesCases.createModulosHasRoles(rolId, modulos);
        return res.status(status).json({ ok, data });
    };
    GetModulosHasRole = async (req, res) => {
        const { rolName, inModule } = req.body;
        const { data, ok, status } = await this.modulesUsesCases.listModulesHasRoles(rolName, inModule);
        return res.status(status).json({ ok, data });
    };
    GetAllModulesWithoutRoles = async (req, res) => {
        const { rolId } = req.body;
        const { data, ok, status } = await this.modulesUsesCases.listModulesWithoutRoles(rolId);
        return res.status(status).json({ data, ok });
    };
}
exports.ModulesController = ModulesController;
//# sourceMappingURL=modules.controller.js.map