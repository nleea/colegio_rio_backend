import { Router } from "express";

const route = Router();

import { CursosController } from "../../../controller/academico/cocurso/curso.controller";
import {CursoRepositoryClass } from "../../../repository/academico/cocursosRepository/cursosRepository";
import { CursosUsesCases } from "../../../../aplication/Academico/cocursos/cursos.usesCases";

// import * as miCursos from "../../../../middleware/Cursos";
/** Injeciones de dependencia*/
const cursosRepository = new CursoRepositoryClass();
// const permissionsRepository = new PermissionsRepositoryClass();

const CursosUsescases = new CursosUsesCases(cursosRepository);
// const permissionsUsescases = new PermissionsUsesCases(permissionsRepository);

const cursosController = new CursosController(
  CursosUsescases
);

/** Rutas para la aplicaion */


route.get("/", cursosController.GetAll); //Traer todos los cursos
route.get("/:id", cursosController.showCurso); // Traer un curso
route.get("/create/curso", cursosController.createCursosP); //Traer todos los crecursos para crear un cruso
route.post("/", cursosController.PostCurso); // Crear un cruso
route.get("/edit/:id", cursosController.showCursoEdit); //Traer informacion de un curso y los datos que puede editar
route.put("/:id", cursosController.updatedCurso); // Actualizar un curso
route.delete("/:id", cursosController.delteCurso); // Borrar un curso

export { route };
