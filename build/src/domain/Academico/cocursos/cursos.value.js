"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoUpdatedValue = exports.CursoCreateValue = exports.CursoValue = void 0;
class CursoValue {
    nombre;
    codigo;
    grado_id;
    sede_id;
    director_id;
    estado_id;
    constructor({ nombre, codigo, grado_id, sede_id, director_id, estado_id }) {
        this.nombre = nombre;
        this.grado_id = grado_id;
        this.codigo = codigo;
        this.sede_id = sede_id;
        this.estado_id = estado_id;
        this.director_id = director_id;
    }
}
exports.CursoValue = CursoValue;
class CursoCreateValue {
    nombre;
    codigo;
    grado_id;
    sede_id;
    estado_id;
    director_id;
    constructor({ nombre, codigo, grado_id, sede_id, director_id, estado_id, }) {
        this.nombre = nombre;
        this.grado_id = grado_id;
        this.codigo = codigo;
        this.sede_id = sede_id;
        this.estado_id = estado_id;
        this.director_id = director_id;
    }
}
exports.CursoCreateValue = CursoCreateValue;
class CursoUpdatedValue {
    nombre;
    codigo;
    grado_id;
    sede_id;
    director_id;
    estado_id;
    constructor({ nombre, codigo, grado_id, sede_id, director_id, estado_id, }) {
        this.nombre = nombre;
        this.grado_id = grado_id;
        this.codigo = codigo;
        this.sede_id = sede_id;
        this.director_id = director_id;
        this.estado_id = estado_id;
    }
}
exports.CursoUpdatedValue = CursoUpdatedValue;
//# sourceMappingURL=cursos.value.js.map