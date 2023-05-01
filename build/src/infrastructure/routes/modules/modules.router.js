"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const route = (0, express_1.Router)();
exports.route = route;
const modules_controller_1 = require("../../controller/modules/modules.controller");
const modulesRepository_1 = require("../../repository/modulesRepository/modulesRepository");
const modules_usescases_1 = require("../../../aplication/modules/modules.usescases");
const db_1 = require("../../../infrastructure/models/db");
/** Injeciones de dependencia*/
const modulesRepository = new modulesRepository_1.ModulesRepositoryClass(db_1.db);
const modulesUsescases = new modules_usescases_1.ModulesUsesCases(modulesRepository);
const modulesController = new modules_controller_1.ModulesController(modulesUsescases);
/** Rutas para la aplicaion */
route.get("/", modulesController.getAll);
route.post("/crear", modulesController.insertModules);
route.delete("/delete", modulesController.deleteModulos);
route.post("/roles", modulesController.createModuleshasRole);
route.post("/roles/hash/", modulesController.GetModulosHasRole);
route.post("/without/roles/", modulesController.GetAllModulesWithoutRoles);
//# sourceMappingURL=modules.router.js.map