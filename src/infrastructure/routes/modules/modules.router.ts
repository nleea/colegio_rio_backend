import { Router } from "express";

const route = Router();

import { ModulesController } from "../../controller/modules/modules.controller";
import { ModulesRepositoryClass } from "../../repository/modulesRepository/modulesRepository";
import { ModulesUsesCases } from "../../../aplication/modules/modules.usescases";
import { db } from "../../../infrastructure/models/db";

/** Injeciones de dependencia*/
const modulesRepository = new ModulesRepositoryClass(db);
const modulesUsescases = new ModulesUsesCases(modulesRepository);
const modulesController = new ModulesController(modulesUsescases);

/** Rutas para la aplicaion */

route.get("/", modulesController.getAll);
route.post("/crear", modulesController.insertModules);
route.delete("/delete", modulesController.deleteModulos);
route.post("/roles", modulesController.createModuleshasRole);
export { route };
