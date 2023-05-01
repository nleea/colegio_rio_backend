"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlController = void 0;
class ControlController {
    controlUsesCases;
    constructor(controlUsesCases) {
        this.controlUsesCases = controlUsesCases;
    }
    controlAsistencia = async (req, res) => {
        const body = req.body;
        const param = req.params;
        const { data, ok, status, header } = await this.controlUsesCases.asistencia(body, param);
        return res.status(status).json({ ok, data });
    };
    asistenciaUsuario = async (req, res) => {
        const { id } = req.body;
        const { data, ok, status } = await this.controlUsesCases.asistenciaUsuario(id);
        res.setHeader("Content-Type", "application/octet-stream");
        res.setHeader("Content-Disposition", "attachment; filename=qrs.zip");
        return res.status(status).send(data);
    };
    asistenciaUsuarioQuery = async (req, res) => {
        const { users } = req.body;
        const { data, ok, status } = await this.controlUsesCases.asistenciaUsuarioQuery(users);
        res.setHeader("Content-Type", "application/octet-stream");
        res.setHeader("Content-Disposition", "attachment; filename=qrs.zip");
        return res.status(status).send(data);
    };
}
exports.ControlController = ControlController;
//# sourceMappingURL=control.controller.js.map