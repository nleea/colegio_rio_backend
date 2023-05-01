"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const route = (0, express_1.Router)();
exports.route = route;
const control_controller_1 = require("../../controller/control/control.controller");
const control_repository_1 = require("../../repository/controlRepository/control.repository");
const control_usesCases_1 = require("../../../aplication/control/control.usesCases");
const db_1 = require("../../../infrastructure/models/db");
/** Injeciones de dependencia*/
const controlRepository = new control_repository_1.ControlRepositoryClass(db_1.db);
const controlUsescases = new control_usesCases_1.ControlUsesCases(controlRepository);
const controlController = new control_controller_1.ControlController(controlUsescases);
/** Rutas para la aplicaion */
route.get("/asistencia/:estudianteId?", controlController.controlAsistencia);
route.get("/user/asistencia/", controlController.asistenciaUsuario);
route.post("/user/asistencia/query/", controlController.asistenciaUsuarioQuery);
//# sourceMappingURL=control.routes.js.map