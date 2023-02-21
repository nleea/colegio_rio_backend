import { PermissionsRepository } from "../../../domain/permissions/permissions.repository";
import { PermissionsEntity } from "../../../domain/permissions/permissions.entity";
import { exclude } from "../../../helpers/omit.fields";
import { db } from "../../models/db";

export class PermissionsRepositoryClass implements PermissionsRepository {
  showPermissions(Permissions: Number): Promise<any> {
    throw new Error("Method not implemented.");
  }

  
  async findAllPermissions(): Promise<any> {
    try {
      const resp = await db.permissions.findMany();

      return resp;
    } catch (error) {
      console.log(error);
    }
  }

  async createPermissions(permissions: PermissionsEntity): Promise<any> {
    throw new Error("Method not implements");
  }

  
}
