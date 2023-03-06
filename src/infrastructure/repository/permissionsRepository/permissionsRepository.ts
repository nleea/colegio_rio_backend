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
        categoria?: any;
      }

      interface Permissions {
        categoria: any;
        permissions: interfacePermissions;
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

        const categoria = result.categoria;
        const permissions = permission;
        const permi: Permissions = { categoria, permissions};
        permissions1.push(permi);

        // arreglo[result.categoria] = []
        // for (const producto of productos) {
          
        //   arreglo[result.categoria].push(producto)
        //   const categoria = result.categoria;
        //   const permissions = producto;
        //   const permi: Permissions = { categoria, permissions};
        //   permissions1.push(permi);
        // }


        

      }
      console.log(permissions1)
 
      return {
        data: permissions1,
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
