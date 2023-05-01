"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComunicacionRepositoryClass = void 0;
const client_1 = require("@prisma/client");
const db_1 = require("../../../models/db");
class ComunicacionRepositoryClass {
    #db;
    constructor() {
        this.#db = db_1.db;
    }
    async findAllComunicaciones() {
        try {
            const resp = await db_1.db.comunicaciones.findMany({
                where: { estado_id: 596 },
                select: {
                    id: true,
                    asunto: true,
                    referencia: true,
                    texto: true,
                    texto_desprendible: true,
                    fecha_envio: true,
                    fecha_cierre: true,
                    cosedes: { select: { id: true, nombre: true } },
                    // cofuncionarios: {
                    //   select: {
                    //     id: true,
                    //     maestras_cofuncionarios_cargo_idTomaestras: {
                    //       select: { id: true, nombre: true },
                    //     },
                    //     maestras_cofuncionarios_dependencia_idTomaestras: {
                    //       select: { id: true, nombre: true },
                    //     },
                    //     maestras_cofuncionarios_especialidad_idTomaestras: {
                    //       select: { id: true, nombre: true },
                    //     },
                    //     maestras_cofuncionarios_estado_idTomaestras: {
                    //       select: { id: true, nombre: true },
                    //     },
                    //     personas: {
                    //       select: {
                    //         id: true,
                    //         nombre: true,
                    //         segundonombre: true,
                    //         apellido: true,
                    //         segundoapellido: true,
                    //       },
                    //     },
                    //   },
                    // },
                    maestras_comunicaciones_estado_idTomaestras: {
                        select: { id: true, nombre: true },
                    },
                    maestras_comunicaciones_tipocomunicacion_idTomaestras: {
                        select: { id: true, nombre: true },
                    },
                },
            });
            return { data: resp, ok: true, status: 200 };
        }
        catch (error) {
            return { data: error, ok: true, status: 200 };
        }
    }
    async createComunicacionesP() {
        try {
            const Comunicaciones = await db_1.db.$transaction([
                db_1.db.$queryRaw `SELECT
        CONCAT(p.nombre, ' ', p.apellido) as funcionario, ca.id as cargo_id, ca.nombre as cargo, 
        es.id as estado_id, es.nombre as estado
      FROM cofuncionarios c
      inner join personas p on (c.persona_id = p.id)
      Inner join maestras ca on (c.cargo_id = ca.id)
      Inner join maestras es on (c.estado_id = es.id)
      where c.estado_id = 596`,
                db_1.db.cosedes.findMany({
                    select: { id: true, nombre: true },
                }),
                db_1.db.maestras.findMany({
                    where: { padre: 740 },
                    select: { id: true, nombre: true },
                }),
                db_1.db.maestras.findMany({
                    where: { padre: 726 },
                    select: { id: true, nombre: true },
                }),
            ]);
            return {
                data: {
                    // funcionarios: Comunicaciones[0],
                    sedes: Comunicaciones[1],
                    estados: Comunicaciones[2],
                    tipo_comunicacion: Comunicaciones[3],
                },
                ok: true,
                status: 200,
            };
        }
        catch (error) {
            return { data: error, ok: true, status: 200 };
        }
    }
    async storeComunicaciones(body) {
        const { asunto, texto, referencia, texto_desprendible, fecha_envio, estado_id, fecha_cierre, funcionario_id, sede_id, tipocomunicacion_id, } = body;
        try {
            console.log('datos2');
            await this.#db.comunicaciones.create({
                data: {
                    asunto: asunto,
                    referencia: referencia,
                    texto_desprendible: texto_desprendible,
                    texto: texto,
                    fecha_envio: fecha_envio,
                    estado_id: estado_id,
                    fecha_cierre: fecha_cierre,
                    funcionario_id: funcionario_id,
                    sede_id: sede_id,
                    tipocomunicacion_id: tipocomunicacion_id,
                    created_by: 1,
                },
            });
            console.log('datos3');
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
    async showComunicacion(id) {
        try {
            // const resp = await db.coComunicaciones.findMany({
            //   where: { id: id },
            //   select: {
            //     id: true,
            //     codigo: true,
            //     nombre: true,
            //     cogradosComunicaciones: {
            //       select: {
            //         cogrados: { select: { id: true, nombre: true, sede_id: true } },
            //       },
            //     },
            //     cosedes: { select: { id: true, nombre: true } },
            //   },
            // });
            return { data: "resp", ok: true, status: 200 };
        }
        catch (error) {
            return { data: error, ok: true, status: 200 };
        }
    }
    async showComunicacionEdit(id) {
        try {
            // const Comunicaciones = await db.$transaction([
            //   db.comunicaciones.findMany({
            //     where: { id: id },
            //     select: {
            //       id: true,
            //       codigo: true,
            //       nombre: true,
            //       cogradosComunicaciones: {
            //         select: {
            //           cogrados: { select: { id: true, nombre: true, sede_id: true } },
            //         },
            //       },
            //       cosedes: { select: { id: true, nombre: true } },
            //     },
            //   }),
            //   db.cogrados.findMany({
            //     select: { id: true, nombre: true },
            //   }),
            //   db.cosedes.findMany({
            //     select: { id: true, nombre: true },
            //   }),
            //   db.maestras.findMany({
            //     where: { padre: 595 },
            //     select: { id: true, nombre: true },
            //   }),
            // ]);
            return {
                data: {
                // Comunicacion: Comunicaciones[0],
                // grados: Comunicaciones[1],
                // sedes: Comunicaciones[2],
                // estados: Comunicaciones[3],
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
    async updatedComunicacion(body, id) {
        try {
            // const { nombre, codigo, sede_id, estado_id, cogradosComunicaciones_create, cogradosComunicaciones_delete } = body;
            // await db.$transaction([
            //   db.coComunicaciones.update({
            //     where: { id: id },
            //     data: {
            //       nombre,
            //       codigo,
            //       sede_id,
            //       estado_id,
            //       cogradosComunicaciones: {create: cogradosComunicaciones_create}
            //     },
            //   }),
            //   db.cogradosComunicaciones.deleteMany({
            //     where: {
            //       grado_id: {
            //         in: cogradosComunicaciones_delete,
            //       },
            //     },
            //   }),
            // ]);
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
    async deleteComunicacion(id) {
        try {
            // console.log(id)
            // await db.cogradosComunicaciones.update({
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
exports.ComunicacionRepositoryClass = ComunicacionRepositoryClass;
//# sourceMappingURL=comunicacionesRepository.js.map