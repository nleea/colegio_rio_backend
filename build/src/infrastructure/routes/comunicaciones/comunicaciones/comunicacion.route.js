"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const route = (0, express_1.Router)();
exports.route = route;
const comunicaciones_controller_1 = require("../../../controller/comunicaciones/comunicaciones/comunicaciones.controller");
const comunicacionesRepository_1 = require("../../../repository/comunicaciones/comunicaciones/comunicacionesRepository");
const comunicaciones_usesCases_1 = require("../../../../aplication/Comunicaciones/comunicaciones/comunicaciones.usesCases");
// import * as miComunicaciones from "../../../../middleware/Comunicaciones";
/** Injeciones de dependencia*/
const ComunicacionesRepository = new comunicacionesRepository_1.ComunicacionRepositoryClass();
// const permissionsRepository = new PermissionsRepositoryClass();
const ComunicacionesUsescases = new comunicaciones_usesCases_1.ComunicacionesUsesCases(ComunicacionesRepository);
// const permissionsUsescases = new PermissionsUsesCases(permissionsRepository);
const ComunicacionesController = new comunicaciones_controller_1.ComunicacionController(ComunicacionesUsescases);
/** Rutas para la aplicaion */
route.get("/", ComunicacionesController.GetAll); //Traer todos los Comunicaciones
route.get("/:id", ComunicacionesController.showComunicacion); // Traer un Comunicacion
route.get("/create/Comunicacion", ComunicacionesController.createComunicacionesP); //Traer todos los creComunicaciones para crear un cruso
route.post("/", ComunicacionesController.PostComunicacion); // Crear un cruso
route.get("/edit/:id", ComunicacionesController.showComunicacionEdit); //Traer informacion de un Comunicacion y los datos que puede editar
route.put("/:id", ComunicacionesController.updatedComunicacion); // Actualizar un Comunicacion
route.delete("/:id", ComunicacionesController.delteComunicacion); // Borrar un Comunicacion
//# sourceMappingURL=comunicacion.route.js.map