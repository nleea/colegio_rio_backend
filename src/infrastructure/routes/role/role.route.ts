import { Router } from "express";

const route = Router();

import { RolesController } from "../../controller/role/role.controller";
import { RolesRepositoryClass } from "../../repository/rolesRepository/rolesRepository";
import { PermissionsRepositoryClass } from "../../repository/permissionsRepository/permissionsRepository";
import { RolesUsesCases } from "../../../aplication/roles/roles.usesCases";
import { PermissionsUsesCases } from "../../../aplication/permissions/permissions.usesCases";
import * as miRoles from "../../../middleware/roles"
/** Injeciones de dependencia*/
const rolesRepository = new RolesRepositoryClass();
const permissionsRepository = new PermissionsRepositoryClass();

const rolesUsescases = new RolesUsesCases(rolesRepository);
const permissionsUsescases = new PermissionsUsesCases(permissionsRepository);

const rolesController = new RolesController(rolesUsescases,permissionsUsescases );

/** Rutas para la aplicaion */

route.get("/", miRoles.VerRoles, rolesController.GetAll);
route.get("/create", miRoles.CreateRoles ,rolesController.GetCreateRole);
route.post("/", rolesController.PostRole);
route.get("/edit/:id", rolesController.showRole);
route.delete("/:id", rolesController.delteRole);

export { route };
