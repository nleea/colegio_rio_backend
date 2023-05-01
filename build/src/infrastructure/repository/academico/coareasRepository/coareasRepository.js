"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaRepositoryClass = void 0;
const client_1 = require("@prisma/client");
const db_1 = require("../../../models/db");
class AreaRepositoryClass {
    #db;
    constructor() {
        this.#db = db_1.db;
    }
    async findAllAreas() {
        try {
            const resp = await db_1.db.coareas.findMany({
                where: { estado_id: 596 },
                select: {
                    id: true,
                    codigo: true,
                    nombre: true,
                    estado_id: true,
                    cogradosareas: {
                        select: {
                            cogrados: { select: { id: true, nombre: true, sede_id: true } },
                        },
                    },
                    cosedes: { select: { id: true, nombre: true } },
                },
            });
            return { data: resp, ok: true, status: 200 };
        }
        catch (error) {
            return { data: error, ok: true, status: 200 };
        }
    }
    async createAreasP() {
        try {
            const areas = await db_1.db.$transaction([
                db_1.db.cogrados.findMany({
                    select: { id: true, nombre: true },
                }),
                db_1.db.cosedes.findMany({
                    select: { id: true, nombre: true },
                }),
                db_1.db.maestras.findMany({
                    where: { padre: 595 },
                    select: { id: true, nombre: true },
                }),
            ]);
            return {
                data: {
                    grados: areas[0],
                    sedes: areas[1],
                    estados: areas[2],
                },
                ok: true,
                status: 200,
            };
        }
        catch (error) {
            return { data: error, ok: true, status: 200 };
        }
    }
    async storeAreas(body) {
        const { nombre, codigo, grado_id, sede_id, estado_id, cogradosareas } = body;
        try {
            await this.#db.coareas.create({
                data: {
                    nombre: nombre,
                    codigo: codigo,
                    grado_id: grado_id,
                    estado_id: estado_id,
                    sede_id: sede_id,
                    created_by: 1,
                    cogradosareas: { create: cogradosareas },
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
    async showArea(id) {
        try {
            const resp = await db_1.db.coareas.findMany({
                where: { id: id },
                select: {
                    id: true,
                    codigo: true,
                    nombre: true,
                    cogradosareas: {
                        select: {
                            cogrados: { select: { id: true, nombre: true, sede_id: true } },
                        },
                    },
                    cosedes: { select: { id: true, nombre: true } },
                },
            });
            return { data: resp, ok: true, status: 200 };
        }
        catch (error) {
            return { data: error, ok: true, status: 200 };
        }
    }
    async showAreaEdit(id) {
        try {
            const areas = await db_1.db.$transaction([
                db_1.db.coareas.findMany({
                    where: { id: id },
                    select: {
                        id: true,
                        codigo: true,
                        nombre: true,
                        cogradosareas: {
                            select: {
                                cogrados: { select: { id: true, nombre: true, sede_id: true } },
                            },
                        },
                        cosedes: { select: { id: true, nombre: true } },
                    },
                }),
                db_1.db.cogrados.findMany({
                    select: { id: true, nombre: true },
                }),
                db_1.db.cosedes.findMany({
                    select: { id: true, nombre: true },
                }),
                db_1.db.maestras.findMany({
                    where: { padre: 595 },
                    select: { id: true, nombre: true },
                }),
            ]);
            return {
                data: {
                    area: areas[0],
                    grados: areas[1],
                    sedes: areas[2],
                    estados: areas[3],
                },
                ok: true,
                status: 200,
            };
            // return { data: resp, ok: true, status: 200 };
        }
        catch (error) {
            return { data: error, ok: true, status: 200 };
        }
    }
    async updatedArea(body, id) {
        try {
            const { nombre, codigo, sede_id, estado_id, cogradosareas_create, cogradosareas_delete } = body;
            await db_1.db.$transaction([
                db_1.db.coareas.update({
                    where: { id: id },
                    data: {
                        nombre,
                        codigo,
                        sede_id,
                        estado_id,
                        cogradosareas: { create: cogradosareas_create }
                    },
                }),
                db_1.db.cogradosareas.deleteMany({
                    where: {
                        grado_id: {
                            in: cogradosareas_delete,
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
        catch (error) {
            return { data: error, ok: true, status: 200 };
        }
    }
    async deleteArea(id) {
        try {
            // console.log(id)
            // await db.cogradosareas.update({
            //   where:{id: id},
            // });
            return {
                data: "ok",
                ok: true,
                status: 200,
            };
            // return { data: resp, ok: true, status: 200 };
        }
        catch (error) {
            return { data: error, ok: true, status: 200 };
        }
    }
}
exports.AreaRepositoryClass = AreaRepositoryClass;
//# sourceMappingURL=coareasRepository.js.map