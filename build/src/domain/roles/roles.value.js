"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdatedValue = exports.RoleCreateValue = exports.RoleValue = void 0;
class RoleValue {
    name;
    constructor({ name }) {
        this.name = name;
    }
}
exports.RoleValue = RoleValue;
class RoleCreateValue {
    name;
    role_has_permissions;
    constructor({ name, role_has_permissions = [] }) {
        this.name = name;
        this.role_has_permissions = role_has_permissions;
    }
}
exports.RoleCreateValue = RoleCreateValue;
class RoleUpdatedValue {
    name;
    role_has_permissions_delete;
    role_has_permissions_create;
    constructor({ name, role_has_permissions_delete = [], role_has_permissions_create = [], }) {
        this.name = name;
        this.role_has_permissions_delete = role_has_permissions_delete;
        this.role_has_permissions_create = role_has_permissions_create;
    }
}
exports.RoleUpdatedValue = RoleUpdatedValue;
//# sourceMappingURL=roles.value.js.map