"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const route = (0, express_1.Router)();
exports.route = route;
const area_controller_1 = require("../../../controller/academico/coarea/area.controller");
const coareasRepository_1 = require("../../../repository/academico/coareasRepository/coareasRepository");
const areas_usesCases_1 = require("../../../../aplication/Academico/coareas/areas.usesCases");
// import * as miareas from "../../../../middleware/areas";
/** Injeciones de dependencia*/
const areasRepository = new coareasRepository_1.AreaRepositoryClass();
// const permissionsRepository = new PermissionsRepositoryClass();
const AreasUsescases = new areas_usesCases_1.AreasUsesCases(areasRepository);
// const permissionsUsescases = new PermissionsUsesCases(permissionsRepository);
const areasController = new area_controller_1.AreaController(AreasUsescases);
/** Rutas para la aplicaion */
route.get("/", areasController.GetAll); //Traer todos los areas
route.get("/:id", areasController.showArea); // Traer un area
route.get("/create/area", areasController.createAreasP); //Traer todos los creareas para crear un cruso
route.post("/", areasController.PostArea); // Crear un cruso
route.get("/edit/:id", areasController.showAreaEdit); //Traer informacion de un area y los datos que puede editar
route.put("/:id", areasController.updatedArea); // Actualizar un area
route.delete("/:id", areasController.delteArea); // Borrar un area
//# sourceMappingURL=coarea.route.js.map