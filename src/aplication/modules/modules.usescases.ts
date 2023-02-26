import { ModulesEntity } from "../../domain/modules/modules.entity";
import { ModulesRepository } from "../../domain/modules/modules.repository";

export class ModulesUsesCases {
  constructor(private readonly moduleRepository: ModulesRepository) {}

  public async listModules() {
    const resp = this.moduleRepository.findAllModules();
    return resp;
  }

  public async createModules(id: number, body: ModulesEntity[]) {
    const resp = this.moduleRepository.createModules(id, body);
    return resp;
  }

  public async deleteModules(rolId: number, body: any[]) {
    const resp = await this.moduleRepository.deleteModule(rolId, body);
    return resp;
  }

  public async createModulosHasRoles(rolId: number, body: any[]) {
    const resp = await this.moduleRepository.createModuleRol(rolId, body);
    return resp;
  }
}
