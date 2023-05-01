"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulesRepositoryClass = void 0;
const menu_resources_1 = require("../../../helpers/menu_resources");
class ModulesRepositoryClass {
    db;
    constructor(db) {
        this.db = db;
    }
    async findAllRolesModules(ModulosName, inModule = false) {
        try {
            const resp = await this.db.roles.findMany({
                where: { name: ModulosName },
                select: {
                    name: true,
                    categoria: true,
                    modulos_has_role: {
                        select: {
                            modulos: {
                                select: { name: true, id_padre: true, path: true, id: true },
                            },
                        },
                    },
                },
            });
            const flatModule = resp.map((c) => {
                return {
                    ...c,
                    modulos_has_role: c.modulos_has_role.flatMap((c) => c.modulos),
                };
            });
            return {
                data: flatModule,
                ok: true,
                status: 200,
            };
        }
        catch (error) {
            return {
                ok: false,
                data: "sss",
                status: 400,
            };
        }
    }
    async moduleWithoutRol(rolId) {
        try {
            const modules = await this.db.modulos.findMany({
                where: {
                    modulos_has_role: { none: { role_id: Number(rolId) } },
                },
            });
            return {
                data: modules,
                ok: true,
                status: 200,
            };
        }
        catch (error) {
            return {
                data: error,
                ok: false,
                status: 400,
            };
        }
    }
    async findAllModules() {
        try {
            const resp = await this.db.roles.findMany({
                orderBy: { id: "desc" },
                select: {
                    name: true,
                    categoria: true,
                    modulos_has_role: {
                        orderBy: { modulos: { id: "asc" } },
                        select: {
                            modulos: {
                                select: { name: true, id_padre: true, path: true, id: true },
                            },
                        },
                    },
                },
            });
            const flatModule = resp.map((c) => {
                return {
                    ...c,
                    modulos_has_role: c.modulos_has_role.flatMap((d) => {
                        return {
                            ...d.modulos,
                        };
                    }),
                };
            });
            return {
                data: flatModule,
                ok: true,
                status: 200,
            };
        }
        catch (error) {
            return {
                ok: false,
                data: "sss",
                status: 400,
            };
        }
    }
    async createModules(rol, body) {
        try {
            const lastId = await this.db.modulos.count();
            const menu = (0, menu_resources_1.crearMenu)(body, lastId + 1, 0);
            await this.db.$transaction(menu.map((moduledata) => this.db.modulos_has_role.create({
                data: {
                    roles: { connect: { id: rol } },
                    modulos: { create: moduledata },
                },
            })));
            return {
                data: "Ok",
                ok: true,
                status: 200,
            };
        }
        catch (error) {
            console.log(error);
            return {
                ok: false,
                data: error,
                status: 400,
            };
        }
    }
    async deleteModule(rolId, rolName, modulos) {
        try {
            await this.db.modulos_has_role.deleteMany({
                where: {
                    AND: {
                        OR: [{ role_id: rolId }, { roles: { name: rolName } }],
                        modulo_id: { in: modulos },
                    },
                },
            });
            return {
                data: "Ok",
                ok: true,
                status: 200,
            };
        }
        catch (error) {
            return {
                data: error,
                ok: false,
                status: 400,
            };
        }
    }
    async createModuleRol(rolId, modulos) {
        try {
            await this.db.$transaction(modulos.map((e) => this.db.modulos_has_role.create({
                data: {
                    roles: { connect: { id: Number(rolId) } },
                    modulos: { connect: { id: Number(e) } },
                },
            })));
            return {
                data: "ok",
                ok: true,
                status: 200,
            };
        }
        catch (error) {
            return { data: error, ok: false, status: 404 };
        }
    }
}
exports.ModulesRepositoryClass = ModulesRepositoryClass;
//# sourceMappingURL=modulesRepository.js.map