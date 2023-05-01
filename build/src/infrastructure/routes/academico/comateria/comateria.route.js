"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const route = (0, express_1.Router)();
exports.route = route;
const materia_controller_1 = require("../../../controller/academico/materia/materia.controller");
const comateriasRepository_1 = require("../../../repository/academico/comateriasRepository/comateriasRepository");
const materias_usesCases_1 = require("../../../../aplication/Academico/comaterias/materias.usesCases");
// import * as mimaterias from "../../../../middleware/materias";
/** Injeciones de dependencia*/
const materiasRepository = new comateriasRepository_1.MateriaRepositoryClass();
// const permissionsRepository = new PermissionsRepositoryClass();
const MateriasUsescases = new materias_usesCases_1.MateriasUsesCases(materiasRepository);
// const permissionsUsescases = new PermissionsUsesCases(permissionsRepository);
const materiasController = new materia_controller_1.MateriasController(MateriasUsescases);
/** Rutas para la aplicaion */
route.get("/", materiasController.GetAll); //Traer todos los materias
route.get("/:id", materiasController.showMateria); // Traer un materia
route.get("/create/materia", materiasController.createMateriasP); //Traer todos los crematerias para crear un cruso
route.post("/", materiasController.PostMateria); // Crear un cruso
route.get("/edit/:id", materiasController.showMateriaEdit); //Traer informacion de un materia y los datos que puede editar
route.put("/:id", materiasController.updatedMateria); // Actualizar un materia
route.delete("/:id", materiasController.delteMateria); // Borrar un materia
//# sourceMappingURL=comateria.route.js.map