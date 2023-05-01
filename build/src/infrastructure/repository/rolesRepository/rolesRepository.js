"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesRepositoryClass = void 0;
const client_1 = require("@prisma/client");
const db_1 = require("../../models/db");
class RolesRepositoryClass {
    #db;
    constructor() {
        this.#db = db_1.db;
    }
    async findAllRoles() {
        try {
            const resp = await db_1.db.roles.findMany({
                distinct: ["name"],
                select: {
                    _count: { select: { users: true } },
                    name: true,
                    id: true,
                    users: {
                        select: {
                            personas: {
                                select: { nombre: true, apellido: true, foto: true },
                            },
                        },
                        take: 3,
                    },
                }, orderBy: {
                    id: 'asc'
                }
            });
            return { data: resp, ok: true, status: 200 };
        }
        catch (error) {
            return { data: error, ok: true, status: 200 };
        }
    }
    async showRole(id) {
        try {
            const roles = await db_1.db.$transaction([
                db_1.db.roles.findMany({
                    where: { id: id },
                    include: {
                        role_has_permissions: {
                            select: {
                                permissions: {
                                    select: { id: true, name: true, categoria: true },
                                },
                            },
                        },
                    },
                }),
                db_1.db.permissions.findMany({
                    select: { id: true, name: true, categoria: true }
                })
            ]);
            return {
                data: {
                    rol: roles[0],
                    permissions: roles[1],
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
    async createRolesP() {
        try {
            const permissions = await db_1.db.$transaction([
                db_1.db.permissions.findMany({
                    select: { id: true, name: true, categoria: true }
                })
            ]);
            return {
                data: {
                    permissions: permissions[0],
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
    async storeRoles(body) {
        const { name, role_has_permissions } = body;
        try {
            await this.#db.roles.create({
                data: {
                    name: name,
                    categoria: "",
                    role_has_permissions: {
                        create: role_has_permissions,
                    },
                },
            });
            return {
                status: 200,
                data: "Ok",
                ok: true,
            };
        }
        catch (e) {
            if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                console.log(e);
                return {
                    status: 400,
                    data: e.message,
                    ok: false,
                };
            }
            else {
                return {
                    status: 400,
                    data: "Unknow Error",
                    ok: false,
                };
            }
        }
    }
    async showRolesPermissions(id) {
        const resp = await db_1.db.users.findUnique({
            where: {
                id: id,
            },
        });
        return {
            data: resp,
            ok: false,
            status: 200,
        };
    }
    async deleteRole(id) {
        const resp = await db_1.db.roles.delete({
            where: {
                id: id,
            },
        });
        return {
            data: resp,
            ok: false,
            status: 200,
        };
    }
    async updatedRole(body, id) {
        const { name, role_has_permissions_create, role_has_permissions_delete } = body;
        await db_1.db.$transaction([
            db_1.db.roles.update({
                where: { id: id },
                data: {
                    name,
                    role_has_permissions: { create: role_has_permissions_create },
                },
            }),
            db_1.db.role_has_permissions.deleteMany({
                where: {
                    permission_id: {
                        in: role_has_permissions_delete,
                    },
                },
            }),
        ]);
        return {
            data: "OK",
            ok: true,
            status: 200,
        };
    }
    async removePermission(id, role) {
        const resp = await db_1.db.role_has_permissions.delete({
            where: {
                id: id,
            },
        });
        return {
            data: resp,
            ok: false,
            status: 200,
        };
    }
    async addPermission(permission_id, role) {
        const roleUser = await db_1.db.role_has_permissions.create({
            data: { role_id: role, permission_id: permission_id },
        });
        return {
            data: roleUser,
            ok: false,
            status: 200,
        };
    }
}
exports.RolesRepositoryClass = RolesRepositoryClass;
//# sourceMappingURL=rolesRepository.js.map