import { Router } from "express";

const route = Router();

import { RolesController } from "../../controller/role/role.controller";
import { RolesRepositoryClass } from "../../repository/rolesRepository/rolesRepository";
import { RolesUsesCases } from "../../../aplication/roles/roles.usesCases";

/** Injeciones de dependencia*/
const rolesRepository = new RolesRepositoryClass();
const rolesUsescases = new RolesUsesCases(rolesRepository);
const rolesController = new RolesController(rolesUsescases);

/** Rutas para la aplicaion */

route.get("/", rolesController.GetAll);

export { route };
