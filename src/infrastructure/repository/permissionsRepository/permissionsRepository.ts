import { PermissionsRepository } from "../../../domain/permissions/permissions.repository";
import { PermissionsEntity } from "../../../domain/permissions/permissions.entity";
import { exclude } from "../../../helpers/omit.fields";
import { db } from "../../models/db";
import {
  ResponseInterfaces,
  ErrorsInterfaces,
} from "../../../types/response.interfaces";
import { json } from "stream/consumers";
export class PermissionsRepositoryClass implements PermissionsRepository {
  showPermissions(Permissions: Number): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async findAllPermissions(): Promise<any> {
    try {
      interface interfacePermissions {
        id: number;
        name: string;
        // categoria?: any;
      }

      interface Permissions {
        categoria: any;
        permissions: interfacePermissions[];
      }

      const results = await db.permissions.groupBy({
        by: ["categoria"],
      });

      var arreglo: any = [];
      const permissions1: Permissions[] = [];

      const allPermissionHasCategory = await db.$transaction(
        results.map((category) =>
          db.permissions.findMany({
            where: {
              categoria: category.categoria,
            },
            select: { id: true, name: true, categoria: true },
          })
        )
      );

      for (let i = 0; i < results.length; i++) {
        permissions1.push({
          categoria: results[i].categoria,
          permissions: allPermissionHasCategory[i],
        });
      }

      const roles_infoUser = await db.roles.findMany({
        select:  { id:true, name:true,
            users: { 
              select: { 
                role_id: true,
              personas:{select: {nombre:true, apellido:true, foto:true}} }, take: 3 } },
              
              
      });
      const roles_count = await db.users.groupBy({
        by: ['role_id'],
        _count: {
          role_id: true
        }
      });

      return {
        data: {'category_permissions': permissions1, 'roles_count': roles_count, 'roles_infoUser':roles_infoUser },
        ok: true,
        status: 200,
      };
    } catch (error) {
      return {
        data: error,
        ok: false,
        status: 200,
      };
    }
  }

  async createPermissions(permissions: PermissionsEntity): Promise<any> {
    throw new Error("Method not implements");
  }
}
