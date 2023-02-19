import { RolesRepository } from "../../domain/roles/roles.repository";

export class RolesUsesCases {
  constructor(private readonly rolesRepository: RolesRepository) {}

  public async listRoles() {
    const resp = await this.rolesRepository.findAllRoles();
    return resp;
  }

  public async createRoles(){
    const resp = await this.rolesRepository.createRolesP()

  }
}
