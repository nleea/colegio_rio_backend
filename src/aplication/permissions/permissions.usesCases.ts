
import { PermissionsRepository } from "../../domain/permissions/permissions.repository";

export class PermissionsUsesCases {
  constructor(private readonly permissionsRepository: PermissionsRepository) {}

  public async listPermissions() {
    const resp = await this.permissionsRepository.findAllPermissions();
<<<<<<< HEAD
    return resp;
=======
    return {
      status: 200,
      data: resp,
      ok: true,
    };
>>>>>>> ffc943089077450778ed1f8bfe6f80de6bfd3088
  }

  public async showPermissions(id: number){
    
  }
}
