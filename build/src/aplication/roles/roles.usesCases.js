"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesUsesCases = void 0;
const roles_value_1 = require("../../domain/roles/roles.value");
class RolesUsesCases {
    rolesRepository;
    constructor(rolesRepository) {
        this.rolesRepository = rolesRepository;
    }
    async listRoles() {
        const resp = await this.rolesRepository.findAllRoles();
        return resp;
    }
    async createRolesP() {
        const resp = await this.rolesRepository.createRolesP();
        return resp;
    }
    async storeRoles(body) {
        const roleValue = new roles_value_1.RoleCreateValue({ ...body });
        const resp = this.rolesRepository.storeRoles(roleValue);
        return resp;
    }
    showRole(id) {
        const resp = this.rolesRepository.showRole(id);
        return resp;
    }
    updatedRole(body, id) {
        const roleValue = new roles_value_1.RoleUpdatedValue({ ...body });
        const resp = this.rolesRepository.updatedRole(roleValue, id);
        return resp;
    }
    deleteRole(id) {
        const resp = this.rolesRepository.deleteRole(id);
        return resp;
    }
    removePermission(id, role) {
        const resp = this.rolesRepository.removePermission(id, role);
        return resp;
    }
    addPermission(permission_id, role) {
        const resp = this.rolesRepository.addPermission(permission_id, role);
        return resp;
    }
}
exports.RolesUsesCases = RolesUsesCases;
//# sourceMappingURL=roles.usesCases.js.map