"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComunicacionesUsesCases = void 0;
const comunicaciones_value_1 = require("../../../domain/Comunicaciones/comunicaciones/comunicaciones.value");
class ComunicacionesUsesCases {
    comunicacionesRepository;
    constructor(comunicacionesRepository) {
        this.comunicacionesRepository = comunicacionesRepository;
    }
    async listComunicaciones() {
        const resp = await this.comunicacionesRepository.findAllComunicaciones();
        return resp;
    }
    async createComunicacionesP() {
        const resp = await this.comunicacionesRepository.createComunicacionesP();
        return resp;
    }
    async createComunicaciones() {
        const resp = await this.comunicacionesRepository.createComunicacionesP();
    }
    async storeComunicaciones(body) {
        const ComunicacioneValue = new comunicaciones_value_1.ComunicacionCreateValue({ ...body });
        // console.log('datos2')
        // console.log(ComunicacioneValue)
        const resp = this.comunicacionesRepository.storeComunicaciones(ComunicacioneValue);
        return resp;
    }
    showComunicacione(id) {
        const resp = this.comunicacionesRepository.showComunicacion(id);
        return resp;
    }
    showComunicacionEdit(id) {
        const resp = this.comunicacionesRepository.showComunicacionEdit(id);
        return resp;
    }
    updatedComunicacion(body, id) {
        const ComunicacioneValue = new comunicaciones_value_1.ComunicacionUpdatedValue({ ...body });
        const resp = this.comunicacionesRepository.updatedComunicacion(ComunicacioneValue, id);
        return resp;
    }
    deleteComunicacion(id) {
        const resp = this.comunicacionesRepository.deleteComunicacion(id);
        return resp;
    }
}
exports.ComunicacionesUsesCases = ComunicacionesUsesCases;
//# sourceMappingURL=comunicaciones.usesCases.js.map