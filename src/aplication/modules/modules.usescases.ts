import { ModulesRepository } from "../../domain/modules/modules.repository";

export class ModulesUsesCases {
  constructor(private readonly moduleRepository: ModulesRepository) {}

  public async listModules() {
    const resp = this.moduleRepository.findAllModules();
    return resp;
  }
}
