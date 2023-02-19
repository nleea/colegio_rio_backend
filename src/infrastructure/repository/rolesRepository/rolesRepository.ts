import { RolesRepository } from "../../../domain/roles/roles.repository";
import { RoleEntity } from "../../../domain/roles/roles.entity";
import { exclude } from "../../../helpers/omit.fields";
import { db } from "../../models/db";

export class RolesRepositoryClass implements RolesRepository {
  async findAllRoles(): Promise<any> {
    try {
      const resp = await db.roles.findMany({
        include: {
          role_has_permissions: {
            select: {
              permissions: { select: { name: true, guard_name: true } },
            },
          },
        },
      });
      exclude<typeof resp, keyof typeof resp>(resp, [
        "created_at",
        "updated_at",
      ] as any);

      return resp;
    } catch (error) {
      console.log(error);
    }
  }

  async createRolesP(): Promise<any> {
    // throw new Error("Method not implements");

    try {
      const resp = await db.permissions.findMany();
      
      return resp;
    } catch (error) {
      console.log(error);
    }
  }

  // roles: RolesEntity

  async storeRoles(roles: RoleEntity): Promise<any>{

  }
}
