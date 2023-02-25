import {
  RoleCreateEntity,
  RoleEntity,
  RoleUpdateEntity,
} from "../../domain/roles/roles.entity";
import { RolesRepository } from "../../domain/roles/roles.repository";
import { RoleCreateValue, RoleValue } from "../../domain/roles/roles.value";

export class RolesUsesCases {
  constructor(private readonly rolesRepository: RolesRepository) {}

  public async listRoles() {
    const resp = await this.rolesRepository.findAllRoles();
    return resp;
  }

  public async createRoles(){
    const resp = await this.rolesRepository.createRolesP()

  }
  public async storeRoles(body: RoleCreateEntity){
    const roleValue = new RoleCreateValue({ ...body });
    const resp = this.rolesRepository.storeRoles(roleValue);
    return resp;
  }

  public showRole(id:number){
    const resp = this.rolesRepository.showRole(id)
    return resp;
  }
}
