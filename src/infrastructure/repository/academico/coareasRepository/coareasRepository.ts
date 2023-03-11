import { AreasRepository } from "../../../../domain/Academico/coareas/areas.repository";
import {
  AreaCreateEntity,
  AreaEntity,
  AreaUpdateEntity,
} from "../../../../domain/Academico/coareas/areas.entity";
import { Prisma } from "@prisma/client";
import { exclude } from "../../../../helpers/omit.fields";
import { db } from "../../../models/db";
import {
  ResponseInterfaces,
  ErrorsInterfaces,
} from "../../../../types/response.interfaces";

export class AreaRepositoryClass implements AreasRepository {
  #db: typeof db;
  constructor() {
    this.#db = db;
  }

  async findAllAreas(): Promise<
    ResponseInterfaces<any> | ErrorsInterfaces<any>
  > {
    try {
      const resp = await db.coareas.findMany({
        where: {estado_id: 596},
        select: {
          id: true,
          codigo: true,
          nombre: true,
          estado_id:true,
          cogradosareas: {
            select: {
              cogrados: { select: { id: true, nombre: true, sede_id: true } },
            },
          },
          cosedes: { select: { id: true, nombre: true } },
        },
      });

      return { data: resp, ok: true, status: 200 };
    } catch (error) {
      return { data: error, ok: true, status: 200 };
    }
  }
  async createAreasP(): Promise<
    ResponseInterfaces<any> | ErrorsInterfaces<any>
  > {
    try {
      const areas = await db.$transaction([
        db.cogrados.findMany({
          select: { id: true, nombre: true },
        }),
        db.cosedes.findMany({
          select: { id: true, nombre: true },
        }),
        db.maestras.findMany({
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
    } catch (error) {
      return { data: error, ok: true, status: 200 };
    }
  }

  async storeAreas(
    body: AreaCreateEntity
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    const { nombre, codigo, grado_id, sede_id, estado_id, cogradosareas } =
      body;

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

  async showArea(
    id: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    try {
      const resp = await db.coareas.findMany({
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
    } catch (error) {
      return { data: error, ok: true, status: 200 };
    }
  }

  async showAreaEdit(
    id: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    try {
      const areas = await db.$transaction([
        db.coareas.findMany({
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
        db.cogrados.findMany({
          select: { id: true, nombre: true },
        }),
        db.cosedes.findMany({
          select: { id: true, nombre: true },
        }),
        db.maestras.findMany({
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
    } catch (error) {
      return { data: error, ok: true, status: 200 };
    }
  }
  async updatedArea(
    body: AreaUpdateEntity,
    id: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    try {
      const { nombre, codigo, sede_id, estado_id, cogradosareas_create, cogradosareas_delete } = body;


      await db.$transaction([
        db.coareas.update({
          where: { id: id },
          data: {
            nombre,
            codigo,
            sede_id,
            estado_id,
            cogradosareas: {create: cogradosareas_create}
          },
        }),

        db.cogradosareas.deleteMany({
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
    } catch (error) {
      return { data: error, ok: true, status: 200 };
    }
  }

  async deleteArea(
    id: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
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
    } catch (error) {
      return { data: error, ok: true, status: 200 };
    }
  }
}
