import { MateriasRepository } from "../../../../domain/Academico/comaterias/materias.repository";
import {
  MateriaCreateEntity,
  MateriaEntity,
  MateriaUpdateEntity,
} from "../../../../domain/Academico/comaterias/materias.entity";
import { Prisma } from "@prisma/client";
import { exclude } from "../../../../helpers/omit.fields";
import { db } from "../../../models/db";
import {
  ResponseInterfaces,
  ErrorsInterfaces,
} from "../../../../types/response.interfaces";

export class MateriaRepositoryClass implements MateriasRepository {
  #db: typeof db;
  constructor() {
    this.#db = db;
  }

  async findAllMaterias(): Promise<
    ResponseInterfaces<any> | ErrorsInterfaces<any>
  > {
    try {
      const resp = await db.comaterias.findMany({
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
          coareas:{select:{id:true, nombre:true, grado_id:true, sede_id:true}}
        },
      });

      return { data: resp, ok: true, status: 200 };
    } catch (error) {
      return { data: error, ok: true, status: 200 };
    }
  }

  async createMateriasP(): Promise<
    ResponseInterfaces<any> | ErrorsInterfaces<any>
  > {
    try {
      const materias = await db.$transaction([
        db.coareas.findMany({
          select: { id: true, nombre: true },
        }),
        db.cosedes.findMany({
          select: { id: true, nombre: true },
        }),
        db.maestras.findMany({
          where: { padre: 595 },
          select: { id: true, nombre: true },
        }),
        db.cofuncionarios.findMany({
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
    } catch (error) {
      return { data: error, ok: true, status: 200 };
    }
  }

  async storeMaterias(
    body: MateriaCreateEntity
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    const {
      nombre,
      codigo,
      sede_id,
      estado_id,
      area_id,
      director_id,
      cofuncionariomaterias,
    } = body;

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
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        console.log(e);
        return {
          status: 400,
          data: e.message,
          ok: false,
        };
      } else {
        return {
          status: 400,
          data: "Unknow Error",
          ok: false,
        };
      }
    }
  }

  async showMateria(
    id: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    try {
      const resp = await db.comaterias.findMany({
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
    } catch (error) {
      return { data: error, ok: true, status: 200 };
    }
  }

  async showMateriaEdit(
    id: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    try {
      const materias = await db.$transaction([
        db.comaterias.findMany({
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
        db.coareas.findMany({
          select: { id: true, nombre: true },
        }),
        db.cosedes.findMany({
          select: { id: true, nombre: true },
        }),
        db.maestras.findMany({
          where: { padre: 595 },
          select: { id: true, nombre: true },
        }),
        db.cofuncionarios.findMany({
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
    } catch (error) {
      return { data: error, ok: true, status: 200 };
    }
  }
  async updatedMateria(
    body: MateriaUpdateEntity,
    id: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    try {
      const { nombre, codigo, sede_id, estado_id,cofuncionariomaterias_create,cofuncionariomaterias_delete,area_id } = body;

      await db.$transaction([
        db.comaterias.update({
          where: { id: id },
          data: {
            nombre,
            codigo,
            sede_id,
            estado_id,
            area_id,
            cofuncionariomaterias:{create:cofuncionariomaterias_create}
          },
        }),

        db.cofuncionariomaterias.deleteMany({
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
    } catch (error) {
      return { data: error, ok: true, status: 200 };
    }
  }

  async deleteMateria(
    id: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
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
    } catch (error) {
      return { data: error, ok: true, status: 200 };
    }
  }
}
