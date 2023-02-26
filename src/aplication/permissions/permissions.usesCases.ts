
import { PermissionsRepository } from "../../domain/permissions/permissions.repository";

export class PermissionsUsesCases {
  constructor(private readonly permissionsRepository: PermissionsRepository) {}

  public async listPermissions() {
    const resp = await this.permissionsRepository.findAllPermissions();
    return {
      status: 200,
      data: "Ok",
      ok: true,
    };
  }

  public async showPermissions(id: number){
    
  }
}
