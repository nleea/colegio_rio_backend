import { Router } from "express";

const route = Router();

import { MateriasController } from "../../../controller/academico/materia/materia.controller";
import {MateriaRepositoryClass } from "../../../repository/academico/comateriasRepository/comateriasRepository";
import { MateriasUsesCases } from "../../../../aplication/Academico/comaterias/materias.usesCases";

// import * as mimaterias from "../../../../middleware/materias";
/** Injeciones de dependencia*/
const materiasRepository = new MateriaRepositoryClass();
// const permissionsRepository = new PermissionsRepositoryClass();

const MateriasUsescases = new MateriasUsesCases(materiasRepository);
// const permissionsUsescases = new PermissionsUsesCases(permissionsRepository);

const materiasController = new MateriasController(
  MateriasUsescases
);

/** Rutas para la aplicaion */


route.get("/", materiasController.GetAll); //Traer todos los materias
route.get("/:id", materiasController.showMateria); // Traer un materia
route.get("/create/materia", materiasController.createMateriasP); //Traer todos los crematerias para crear un cruso
route.post("/", materiasController.PostMateria); // Crear un cruso
route.get("/edit/:id", materiasController.showMateriaEdit); //Traer informacion de un materia y los datos que puede editar
route.put("/:id", materiasController.updatedMateria); // Actualizar un materia
route.delete("/:id", materiasController.delteMateria); // Borrar un materia

export { route };
