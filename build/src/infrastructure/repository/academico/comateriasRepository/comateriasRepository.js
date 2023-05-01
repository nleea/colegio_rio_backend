"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaRepositoryClass = void 0;
const client_1 = require("@prisma/client");
const db_1 = require("../../../models/db");
class MateriaRepositoryClass {
    #db;
    constructor() {
        this.#db = db_1.db;
    }
    async findAllMaterias() {
        try {
            const resp = await db_1.db.comaterias.findMany({
                where: { estado_id: 596 },
                select: {
                    id: true,
                    codigo: true,
                    nombre: true,
                    estado_id: true,
                    cosedes: { select: { id: true, nombre: true } },
                    cofuncionariomaterias: {
                        select: {
                            cofuncionarios: {
                                select: {
                                    id: true,
                                    personas: { select: { nombre: true, apellido: true } },
                                },
                            },
                        },
                    },
                    coareas: { select: { id: true, nombre: true, grado_id: true, sede_id: true } }
                },
            });
            return { data: resp, ok: true, status: 200 };
        }
        catch (error) {
            return { data: error, ok: true, status: 200 };
        }
    }
    async createMateriasP() {
        try {
            const materias = await db_1.db.$transaction([
                db_1.db.coareas.findMany({
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
            return {
                data: {
                    areas: materias[0],
                    sedes: materias[1],
                    estados: materias[2],
                    funcionarios: materias[3],
                },
                ok: true,
                status: 200,
            };
        }
        catch (error) {
            return { data: error, ok: true, status: 200 };
        }
    }
    async storeMaterias(body) {
        const { nombre, codigo, sede_id, estado_id, area_id, director_id, cofuncionariomaterias, } = body;
        try {
            await this.#db.comaterias.create({
                data: {
                    nombre: nombre,
                    codigo: codigo,
                    estado_id: estado_id,
                    area_id: area_id,
                    sede_id: sede_id,
                    created_by: 1,
                    cofuncionariomaterias: { create: cofuncionariomaterias },
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
    async showMateria(id) {
        try {
            const resp = await db_1.db.comaterias.findMany({
                where: { id: id },
                select: {
                    id: true,
                    codigo: true,
                    nombre: true,
                    estado_id: true,
                    cosedes: { select: { id: true, nombre: true } },
                    cofuncionariomaterias: {
                        select: {
                            cofuncionarios: {
                                select: {
                                    id: true,
                                    personas: { select: { nombre: true, apellido: true } },
                                },
                            },
                        },
                    },
                },
            });
            return { data: resp, ok: true, status: 200 };
        }
        catch (error) {
            return { data: error, ok: true, status: 200 };
        }
    }
    async showMateriaEdit(id) {
        try {
            const materias = await db_1.db.$transaction([
                db_1.db.comaterias.findMany({
                    where: { id: id },
                    select: {
                        id: true,
                        codigo: true,
                        nombre: true,
                        estado_id: true,
                        cosedes: { select: { id: true, nombre: true } },
                        cofuncionariomaterias: {
                            select: {
                                cofuncionarios: {
                                    select: {
                                        id: true,
                                        personas: { select: { nombre: true, apellido: true } },
                                    },
                                },
                            },
                        },
                    },
                }),
                db_1.db.coareas.findMany({
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
            return {
                data: {
                    materia: materias[0],
                    areas: materias[1],
                    sedes: materias[2],
                    estados: materias[3],
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
    async updatedMateria(body, id) {
        try {
            const { nombre, codigo, sede_id, estado_id, cofuncionariomaterias_create, cofuncionariomaterias_delete, area_id } = body;
            await db_1.db.$transaction([
                db_1.db.comaterias.update({
                    where: { id: id },
                    data: {
                        nombre,
                        codigo,
                        sede_id,
                        estado_id,
                        area_id,
                        cofuncionariomaterias: { create: cofuncionariomaterias_create }
                    },
                }),
                db_1.db.cofuncionariomaterias.deleteMany({
                    where: {
                        funcionario_id: {
                            in: cofuncionariomaterias_delete,
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
    async deleteMateria(id) {
        try {
            // console.log(id)
            // await db.cogradosmaterias.update({
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
exports.MateriaRepositoryClass = MateriaRepositoryClass;
//# sourceMappingURL=comateriasRepository.js.map