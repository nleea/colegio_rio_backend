"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsUsesCases = void 0;
class PermissionsUsesCases {
    permissionsRepository;
    constructor(permissionsRepository) {
        this.permissionsRepository = permissionsRepository;
    }
    async listPermissions() {
        const resp = await this.permissionsRepository.findAllPermissions();
        return {
            status: 200,
            data: resp,
            ok: true,
        };
    }
    async showPermissions(id) {
    }
}
exports.PermissionsUsesCases = PermissionsUsesCases;
//# sourceMappingURL=permissions.usesCases.js.map