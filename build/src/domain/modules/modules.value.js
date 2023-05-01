"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulesValue = void 0;
class ModulesValue {
    id;
    name;
    path;
    icon;
    id_padre;
    order;
    created_at;
    created_by;
    updated_at;
    updated_by;
    deleted_at;
    deleted_by;
    constructor({ id, name, path, icon, id_padre, order, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by, }) {
        this.created_at = created_at;
        this.created_by = created_by;
        this.deleted_at = deleted_at;
        this.deleted_by = deleted_by;
        this.icon = icon;
        this.id = id;
        this.id_padre = id_padre;
        this.order = order;
        this.name = name;
        this.path = path;
        this.updated_at = updated_at;
        this.updated_by = updated_by;
    }
}
exports.ModulesValue = ModulesValue;
//# sourceMappingURL=modules.value.js.map