import { PermissionsRepository } from "../../../domain/permissions/permissions.repository";
import { PermissionsEntity } from "../../../domain/permissions/permissions.entity";
import { exclude } from "../../../helpers/omit.fields";
import { db } from "../../models/db";

export class PermissionsRepositoryClass implements PermissionsRepository {
  async findAllPermissions(): Promise<any> {
    try {
      const resp = await db.permissions.findMany({
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

  async createPermissions(permissions: PermissionsEntity): Promise<any> {
    throw new Error("Method not implements");
  }
}
