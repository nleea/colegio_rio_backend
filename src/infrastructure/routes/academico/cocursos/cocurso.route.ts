import { Router } from "express";

const route = Router();

import { CursosController } from "../../../controller/academico/cocurso/curso.controller";
import {CursoRepositoryClass } from "../../../repository/academico/cocursosRepository/cursosRepository";
import { CursosUsesCases } from "../../../../aplication/Academico/cocursos/roles.usesCases";

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

route.get("/", cursosController.GetAll);
route.get("/create", cursosController.GetCreateCurso);
route.post("/", cursosController.PostCurso);
route.get("/edit/:id", cursosController.showCurso);
route.put("/:id", cursosController.updatedCurso);
route.delete("/:id", cursosController.delteCurso);

export { route };
