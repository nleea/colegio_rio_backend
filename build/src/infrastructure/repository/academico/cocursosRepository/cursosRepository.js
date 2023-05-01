"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoRepositoryClass = void 0;
const client_1 = require("@prisma/client");
const db_1 = require("../../../models/db");
class CursoRepositoryClass {
    #db;
    constructor() {
        this.#db = db_1.db;
    }
    async findAllCursos() {
        try {
            const resp = await db_1.db.cocursos.findMany({
                select: {
                    id: true,
                    codigo: true,
                    nombre: true,
                    cogrados: { select: { id: true, nombre: true, sede_id: true } },
                    cofuncionarios: {
                        select: {
                            personas: {
                                select: {
                                    nombre: true,
                                    segundonombre: true,
                                    apellido: true,
                                    segundoapellido: true,
                                },
                            },
                        },
                    },
                    cosedes: { select: { id: true, nombre: true } },
                    maestras: { select: { id: true, nombre: true } }
                },
            });
            return { data: resp, ok: true, status: 200 };
        }
        catch (error) {
            return { data: error, ok: true, status: 200 };
        }
    }
    async createCursosP() {
        try {
            const grados = await db_1.db.$transaction([
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
                db_1.db.cofuncionarios.findMany({
                    select: {
                        id: true,
                        maestras_cofuncionarios_cargo_idTomaestras: {
                            select: { nombre: true },
                        },
                        personas: { select: { nombre: true, apellido: true } },
                    },
                }),
            ]);
            // console.log(grados)
            return {
                data: {
                    grados: grados[0],
                    sedes: grados[1],
                    estados: grados[2],
                    funcionarios: grados[3],
                },
                ok: true,
                status: 200,
            };
        }
        catch (error) {
            return { data: error, ok: true, status: 200 };
        }
    }
    async storeCursos(body) {
        const { nombre, codigo, director_id, grado_id, sede_id, estado_id } = body;
        try {
            await this.#db.cocursos.create({
                data: {
                    nombre: nombre,
                    codigo: codigo,
                    director_id: director_id,
                    grado_id: grado_id,
                    estado_id: estado_id,
                    sede_id: sede_id,
                    created_by: 1,
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
    async showCurso(id) {
        try {
            const resp = await db_1.db.cocursos.findMany({
                where: { id: id },
                include: {
                    cogrados: { select: { id: true, nombre: true, sede_id: true } },
                    cofuncionarios: {
                        select: {
                            personas: {
                                select: {
                                    nombre: true,
                                    segundonombre: true,
                                    apellido: true,
                                    segundoapellido: true,
                                },
                            },
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
    async showCursoEdit(id) {
        try {
            // const resp = await db.cocursos.findMany({
            //   where: { id: id },
            //   include: {
            //     cogrados: { select: { id: true, nombre: true, sede_id: true } },
            //     cofuncionarios: {
            //       select: {
            //         personas: {
            //           select: {
            //             nombre: true,
            //             segundonombre: true,
            //             apellido: true,
            //             segundoapellido: true,
            //           },
            //         },
            //       },
            //     },
            //     cosedes: { select: { id: true, nombre: true } },
            //   },
            // });
            const grados = await db_1.db.$transaction([
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
                db_1.db.cofuncionarios.findMany({
                    select: {
                        id: true,
                        maestras_cofuncionarios_cargo_idTomaestras: {
                            select: { nombre: true },
                        },
                        personas: { select: { nombre: true, apellido: true } },
                    },
                }),
                db_1.db.cocursos.findMany({
                    where: { id: id },
                    include: {
                        cogrados: { select: { id: true, nombre: true, sede_id: true } },
                        cofuncionarios: {
                            select: {
                                personas: {
                                    select: {
                                        nombre: true,
                                        segundonombre: true,
                                        apellido: true,
                                        segundoapellido: true,
                                    },
                                },
                            },
                        },
                        cosedes: { select: { id: true, nombre: true } },
                    },
                }),
            ]);
            // console.log(grados)
            return {
                data: {
                    curso: grados[4],
                    grados: grados[0],
                    sedes: grados[1],
                    estados: grados[2],
                    funcionarios: grados[3],
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
    async updatedCurso(body, id) {
        try {
            const { nombre, codigo, director_id, grado_id, sede_id, estado_id } = body;
            await db_1.db.$transaction([
                db_1.db.cocursos.update({
                    where: { id: id },
                    data: {
                        nombre: nombre,
                        codigo: codigo,
                        director_id: director_id,
                        estado_id: estado_id,
                        grado_id: grado_id,
                        sede_id: sede_id,
                        created_by: 1,
                    }
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
    async deleteCurso(id) {
        try {
            await db_1.db.cocursos.delete({
                where: {
                    id: id,
                },
            });
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
exports.CursoRepositoryClass = CursoRepositoryClass;
//# sourceMappingURL=cursosRepository.js.map