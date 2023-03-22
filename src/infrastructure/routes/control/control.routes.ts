import { Router } from "express";

const route = Router();

import { ControlController } from "../../controller/control/control.controller";
import { ControlRepositoryClass } from "../../repository/control/control.repository";
import { ControlUsesCases } from "../../../aplication/control/control.usesCases";
import { db } from "../../../infrastructure/models/db";

/** Injeciones de dependencia*/
const controlRepository = new ControlRepositoryClass(db);
const controlUsescases = new ControlUsesCases(controlRepository);
const controlController = new ControlController(controlUsescases);

/** Rutas para la aplicaion */

route.post("/asistencia/", controlController.controlAsistencia);
export { route };