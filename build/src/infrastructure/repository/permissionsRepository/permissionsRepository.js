"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsRepositoryClass = void 0;
const db_1 = require("../../models/db");
class PermissionsRepositoryClass {
    showPermissions(Permissions) {
        throw new Error("Method not implemented.");
    }
    async findAllPermissions() {
        try {
            // interface interfacePermissions {
            //   id: number;
            //   name: string;
            //   categoria?: any;
            // }
            // interface Permissions {
            //   categoria: any;
            //   permissions: interfacePermissions;
            // }
            // const results = await db.permissions.groupBy({
            //   by: ["categoria"],
            // });
            // const permissions1: Permissions[] = [];
            // const allPermissionHasCategory = await db.$transaction(
            //   results.map((category) =>
            //     db.permissions.findMany({
            //       where: {
            //         categoria: category.categoria,
            //       },
            //       select: { id: true, name: true, categoria: true },
            //     })
            //   )
            // );
            // for (let i = 0; i < results.length; i++) {
            //   permissions1.push({
            //     categoria: results[i].categoria,
            //     permissions: allPermissionHasCategory[i] as any,
            //   });
            // }
            // return {
            //   data: permissions1,
            //   ok: true,
            //   status: 200,
            // };
            const permissions = await db_1.db.$transaction([
                db_1.db.permissions.findMany({
                    select: { id: true, name: true, categoria: true }
                })
            ]);
            return {
                data: {
                    Permissions: permissions[0],
                },
                ok: true,
                status: 200,
            };
        }
        catch (error) {
            return {
                data: error,
                ok: false,
                status: 200,
            };
        }
    }
    async createPermissions(permissions) {
        throw new Error("Method not implements");
    }
}
exports.PermissionsRepositoryClass = PermissionsRepositoryClass;
//# sourceMappingURL=permissionsRepository.js.map