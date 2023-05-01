"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulesUsesCases = void 0;
class ModulesUsesCases {
    moduleRepository;
    constructor(moduleRepository) {
        this.moduleRepository = moduleRepository;
    }
    async listModules() {
        const resp = this.moduleRepository.findAllModules();
        return resp;
    }
    async createModules(id, body) {
        const resp = this.moduleRepository.createModules(id, body);
        return resp;
    }
    async deleteModules(rolId, rolName, body) {
        const resp = await this.moduleRepository.deleteModule(rolId, rolName, body);
        return resp;
    }
    async createModulosHasRoles(rolId, body) {
        const resp = await this.moduleRepository.createModuleRol(rolId, body);
        return resp;
    }
    async listModulesHasRoles(rolesName, inModule) {
        const resp = await this.moduleRepository.findAllRolesModules(rolesName, inModule);
        return resp;
    }
    async listModulesWithoutRoles(rolId) {
        const resp = await this.moduleRepository.moduleWithoutRol(rolId);
        return resp;
    }
}
exports.ModulesUsesCases = ModulesUsesCases;
//# sourceMappingURL=modules.usescases.js.map