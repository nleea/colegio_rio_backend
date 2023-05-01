"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaUpdatedValue = exports.AreaCreateValue = exports.AreaValue = void 0;
class AreaValue {
    nombre;
    codigo;
    grado_id;
    sede_id;
    estado_id;
    constructor({ nombre, codigo, grado_id, sede_id, estado_id }) {
        this.nombre = nombre;
        this.grado_id = grado_id;
        this.codigo = codigo;
        this.sede_id = sede_id;
        this.estado_id = estado_id;
    }
}
exports.AreaValue = AreaValue;
class AreaCreateValue {
    nombre;
    codigo;
    grado_id;
    sede_id;
    estado_id;
    cogradosareas;
    constructor({ nombre, codigo, grado_id, sede_id, estado_id, cogradosareas }) {
        this.nombre = nombre;
        this.grado_id = grado_id;
        this.codigo = codigo;
        this.sede_id = sede_id;
        this.estado_id = estado_id;
        this.cogradosareas = cogradosareas;
    }
}
exports.AreaCreateValue = AreaCreateValue;
class AreaUpdatedValue {
    nombre;
    codigo;
    grado_id;
    sede_id;
    estado_id;
    cogradosareas_create;
    cogradosareas_delete;
    constructor({ nombre, codigo, grado_id, sede_id, estado_id, cogradosareas_create, cogradosareas_delete }) {
        this.nombre = nombre;
        this.grado_id = grado_id;
        this.codigo = codigo;
        this.sede_id = sede_id;
        this.estado_id = estado_id;
        this.cogradosareas_create = cogradosareas_create;
        this.cogradosareas_delete = cogradosareas_delete;
    }
}
exports.AreaUpdatedValue = AreaUpdatedValue;
//# sourceMappingURL=areas.value.js.map