"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const route = (0, express_1.Router)();
exports.route = route;
const curso_controller_1 = require("../../../controller/academico/cocurso/curso.controller");
const cursosRepository_1 = require("../../../repository/academico/cocursosRepository/cursosRepository");
const cursos_usesCases_1 = require("../../../../aplication/Academico/cocursos/cursos.usesCases");
// import * as miCursos from "../../../../middleware/Cursos";
/** Injeciones de dependencia*/
const cursosRepository = new cursosRepository_1.CursoRepositoryClass();
// const permissionsRepository = new PermissionsRepositoryClass();
const CursosUsescases = new cursos_usesCases_1.CursosUsesCases(cursosRepository);
// const permissionsUsescases = new PermissionsUsesCases(permissionsRepository);
const cursosController = new curso_controller_1.CursosController(CursosUsescases);
/** Rutas para la aplicaion */
route.get("/", cursosController.GetAll); //Traer todos los cursos
route.get("/:id", cursosController.showCurso); // Traer un curso
route.get("/create/curso", cursosController.createCursosP); //Traer todos los crecursos para crear un cruso
route.post("/", cursosController.PostCurso); // Crear un cruso
route.get("/edit/:id", cursosController.showCursoEdit); //Traer informacion de un curso y los datos que puede editar
route.put("/:id", cursosController.updatedCurso); // Actualizar un curso
route.delete("/:id", cursosController.delteCurso); // Borrar un curso
//# sourceMappingURL=cocurso.route.js.map