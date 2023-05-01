"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const route = (0, express_1.Router)();
exports.route = route;
const role_controller_1 = require("../../controller/role/role.controller");
const rolesRepository_1 = require("../../repository/rolesRepository/rolesRepository");
const permissionsRepository_1 = require("../../repository/permissionsRepository/permissionsRepository");
const roles_usesCases_1 = require("../../../aplication/roles/roles.usesCases");
const permissions_usesCases_1 = require("../../../aplication/permissions/permissions.usesCases");
/** Injeciones de dependencia*/
const rolesRepository = new rolesRepository_1.RolesRepositoryClass();
const permissionsRepository = new permissionsRepository_1.PermissionsRepositoryClass();
const rolesUsescases = new roles_usesCases_1.RolesUsesCases(rolesRepository);
const permissionsUsescases = new permissions_usesCases_1.PermissionsUsesCases(permissionsRepository);
const rolesController = new role_controller_1.RolesController(rolesUsescases, permissionsUsescases);
/** Rutas para la aplicaion */
route.get("/", rolesController.GetAll);
route.get("/create", rolesController.GetCreateRole);
route.post("/", rolesController.PostRole);
route.get("/edit/:id", rolesController.showRole);
route.put("/:id", rolesController.updatedRole);
route.delete("/:id", rolesController.delteRole);
route.post("/peremove/:id", rolesController.removePermission);
route.post("/addpermission", rolesController.addPermission);
//# sourceMappingURL=role.route.js.map