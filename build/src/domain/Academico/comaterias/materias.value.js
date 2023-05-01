"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaUpdatedValue = exports.MateriaCreateValue = exports.MateriaValue = void 0;
class MateriaValue {
    nombre;
    codigo;
    grado_id;
    sede_id;
    area_id;
    director_id;
    estado_id;
    constructor({ nombre, codigo, grado_id, sede_id, director_id, estado_id, area_id }) {
        this.nombre = nombre;
        this.grado_id = grado_id;
        this.codigo = codigo;
        this.sede_id = sede_id;
        this.estado_id = estado_id;
        this.director_id = director_id;
        this.area_id = area_id;
    }
}
exports.MateriaValue = MateriaValue;
class MateriaCreateValue {
    nombre;
    codigo;
    grado_id;
    sede_id;
    estado_id;
    director_id;
    area_id;
    cofuncionariomaterias;
    constructor({ nombre, codigo, grado_id, sede_id, director_id, estado_id, area_id, cofuncionariomaterias }) {
        this.nombre = nombre;
        this.grado_id = grado_id;
        this.codigo = codigo;
        this.sede_id = sede_id;
        this.estado_id = estado_id;
        this.director_id = director_id;
        this.area_id = area_id;
        this.cofuncionariomaterias = cofuncionariomaterias;
    }
}
exports.MateriaCreateValue = MateriaCreateValue;
class MateriaUpdatedValue {
    nombre;
    codigo;
    grado_id;
    sede_id;
    director_id;
    estado_id;
    area_id;
    cofuncionariomaterias_create;
    cofuncionariomaterias_delete;
    constructor({ nombre, codigo, grado_id, sede_id, director_id, estado_id, area_id, cofuncionariomaterias_create, cofuncionariomaterias_delete }) {
        this.nombre = nombre;
        this.grado_id = grado_id;
        this.codigo = codigo;
        this.sede_id = sede_id;
        this.director_id = director_id;
        this.estado_id = estado_id;
        this.area_id = area_id;
        this.cofuncionariomaterias_create = cofuncionariomaterias_create;
        this.cofuncionariomaterias_delete = cofuncionariomaterias_delete;
    }
}
exports.MateriaUpdatedValue = MateriaUpdatedValue;
//# sourceMappingURL=materias.value.js.map