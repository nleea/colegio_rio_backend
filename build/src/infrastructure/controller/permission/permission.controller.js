"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsController = void 0;
class PermissionsController {
    permissionsUsesCases;
    constructor(permissionsUsesCases) {
        this.permissionsUsesCases = permissionsUsesCases;
    }
    GetAll = async (req, res) => {
        const resp = await this.permissionsUsesCases.listPermissions();
        return res.json(resp);
    };
}
exports.PermissionsController = PermissionsController;
//# sourceMappingURL=permission.controller.js.map