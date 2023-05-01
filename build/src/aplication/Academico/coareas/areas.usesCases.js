"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreasUsesCases = void 0;
const areas_value_1 = require("../../../domain/Academico/coareas/areas.value");
class AreasUsesCases {
    areasRepository;
    constructor(areasRepository) {
        this.areasRepository = areasRepository;
    }
    async listAreas() {
        const resp = await this.areasRepository.findAllAreas();
        return resp;
    }
    async createAreasP() {
        const resp = await this.areasRepository.createAreasP();
        return resp;
    }
    async createAreas() {
        const resp = await this.areasRepository.createAreasP();
    }
    async storeAreas(body) {
        const AreaValue = new areas_value_1.AreaCreateValue({ ...body });
        const resp = this.areasRepository.storeAreas(AreaValue);
        return resp;
    }
    showArea(id) {
        const resp = this.areasRepository.showArea(id);
        return resp;
    }
    showAreaEdit(id) {
        const resp = this.areasRepository.showAreaEdit(id);
        return resp;
    }
    updatedArea(body, id) {
        const AreaValue = new areas_value_1.AreaUpdatedValue({ ...body });
        const resp = this.areasRepository.updatedArea(AreaValue, id);
        return resp;
    }
    deleteArea(id) {
        const resp = this.areasRepository.deleteArea(id);
        return resp;
    }
}
exports.AreasUsesCases = AreasUsesCases;
//# sourceMappingURL=areas.usesCases.js.map