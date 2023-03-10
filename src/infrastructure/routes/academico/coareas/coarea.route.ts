import { Router } from "express";

const route = Router();

import { AreaController } from "../../../controller/academico/coarea/area.controller";
import {AreaRepositoryClass } from "../../../repository/academico/coareasRepository/coareasRepository";
import { AreasUsesCases } from "../../../../aplication/Academico/coareas/areas.usesCases";

// import * as miareas from "../../../../middleware/areas";
/** Injeciones de dependencia*/
const areasRepository = new AreaRepositoryClass();
// const permissionsRepository = new PermissionsRepositoryClass();

const AreasUsescases = new AreasUsesCases(areasRepository);
// const permissionsUsescases = new PermissionsUsesCases(permissionsRepository);

const areasController = new AreaController(
  AreasUsescases
);

/** Rutas para la aplicaion */


route.get("/", areasController.GetAll); //Traer todos los areas
route.get("/:id", areasController.showArea); // Traer un area
route.get("/create/area", areasController.createAreasP); //Traer todos los creareas para crear un cruso
route.post("/", areasController.PostArea); // Crear un cruso
route.get("/edit/:id", areasController.showAreaEdit); //Traer informacion de un area y los datos que puede editar
route.put("/:id", areasController.updatedArea); // Actualizar un area
route.delete("/:id", areasController.delteArea); // Borrar un area

export { route };
