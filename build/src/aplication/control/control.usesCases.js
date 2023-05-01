"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlUsesCases = void 0;
class ControlUsesCases {
    controlRepository;
    constructor(controlRepository) {
        this.controlRepository = controlRepository;
    }
    async asistencia(body, param) {
        const resp = await this.controlRepository.asistencia(body, param);
        return resp;
    }
    async asistenciaUsuario(id) {
        const resp = await this.controlRepository.userAsistencia(id);
        return resp;
    }
    async asistenciaUsuarioQuery(ids) {
        const resp = await this.controlRepository.userAsistenciaQuery(ids);
        return resp;
    }
}
exports.ControlUsesCases = ControlUsesCases;
//# sourceMappingURL=control.usesCases.js.map