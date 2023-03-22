import { Router } from "express";

const route = Router();

import { ComunicacionController } from "../../../controller/comunicaciones/comunicaciones/comunicaciones.controller";
import {ComunicacionRepositoryClass } from "../../../repository/comunicaciones/comunicaciones/comunicacionesRepository";
import { ComunicacionesUsesCases } from "../../../../aplication/Comunicaciones/comunicaciones/comunicaciones.usesCases";

// import * as miComunicaciones from "../../../../middleware/Comunicaciones";
/** Injeciones de dependencia*/
const ComunicacionesRepository = new ComunicacionRepositoryClass();
// const permissionsRepository = new PermissionsRepositoryClass();

const ComunicacionesUsescases = new ComunicacionesUsesCases(ComunicacionesRepository);
// const permissionsUsescases = new PermissionsUsesCases(permissionsRepository);

const ComunicacionesController = new ComunicacionController(
  ComunicacionesUsescases
);

/** Rutas para la aplicaion */


route.get("/", ComunicacionesController.GetAll); //Traer todos los Comunicaciones
route.get("/:id", ComunicacionesController.showComunicacion); // Traer un Comunicacion
route.get("/create/Comunicacion", ComunicacionesController.createComunicacionesP); //Traer todos los creComunicaciones para crear un cruso
route.post("/", ComunicacionesController.PostComunicacion); // Crear un cruso
route.get("/edit/:id", ComunicacionesController.showComunicacionEdit); //Traer informacion de un Comunicacion y los datos que puede editar
route.put("/:id", ComunicacionesController.updatedComunicacion); // Actualizar un Comunicacion
route.delete("/:id", ComunicacionesController.delteComunicacion); // Borrar un Comunicacion

export { route };
