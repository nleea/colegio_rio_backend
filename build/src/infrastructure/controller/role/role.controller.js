"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesController = void 0;
const roles_value_1 = require("../../../domain/roles/roles.value");
class RolesController {
    rolesUsesCases;
    permissionsUsesCases;
    constructor(rolesUsesCases, permissionsUsesCases) {
        this.rolesUsesCases = rolesUsesCases;
        this.permissionsUsesCases = permissionsUsesCases;
    }
    GetAll = async (req, res) => {
        const { data, ok, status } = await this.rolesUsesCases.listRoles();
        return res.status(status).json({ data, ok });
    };
    GetCreateRole = async (req, res) => {
        // createRoles
        const { data, ok, status } = await this.rolesUsesCases.createRolesP();
        return res.status(status).json({ data, ok });
        // const { data } = await this.permissionsUsesCases.listPermissions();
        // // console.log(data)
        // return res.json(data);
    };
    PostRole = async (req, res) => {
        const body = req.body;
        const rolecrea = new roles_value_1.RoleCreateValue(body);
        const { data, ok, status } = await this.rolesUsesCases.storeRoles(rolecrea);
        return res.status(status).json({ data, ok });
    };
    showPermission = async (req, res, id) => {
        return res.json(id);
    };
    showRole = async (req, res) => {
        const { id } = req.params;
        // const resp = await this.rolesUsesCases.showRole(Number(id));
        // const permissions = await this.permissionsUsesCases.listPermissions();
        const { data, ok, status } = await this.rolesUsesCases.showRole(Number(id));
        return res.status(status).json({ data, ok });
    };
    updatedRole = async (req, res) => {
        const { id } = req.params;
        // console.log(req)
        const body = req.body;
        const rolecrea = new roles_value_1.RoleUpdatedValue(body);
        const resp = await this.rolesUsesCases.updatedRole(rolecrea, Number(id));
        return res.json(resp);
    };
    delteRole = async (req, res) => {
        const { id } = req.params;
        // console.log(req)
        const resp = await this.rolesUsesCases.showRole(Number(id));
        //if (resp.length == 0) return res.json("Rol undefined");
        await this.rolesUsesCases.deleteRole(Number(id));
        return res.json({ mensaje: "Rol deleted" });
    };
    removePermission = async (req, res) => {
        const { id } = req.params;
        const roleUser = req.user.role_id;
        const PermissionDelte = await this.rolesUsesCases.removePermission(Number(id), Number(roleUser));
        return res.json({ mensaje: PermissionDelte });
    };
    addPermission = async (req, res) => {
        const permission_id = req.body.permission_id;
        const role_id = req.body.role_id;
        // console.log(permission_id + ' - '+  role_id)
        const PermissionAdd = await this.rolesUsesCases.addPermission(Number(permission_id), Number(role_id));
        return res.json({ mensaje: PermissionAdd });
    };
}
exports.RolesController = RolesController;
//# sourceMappingURL=role.controller.js.map