import { CursosRepository } from "../../../../domain/Academico/cocursos/cursos.repository";
import {
  CursoCreateEntity,
  CursoEntity,
  CursoUpdateEntity,
} from "../../../../domain/Academico/cocursos/cursos.entity";
import { Prisma } from "@prisma/client";
import { exclude } from "../../../../helpers/omit.fields";
import { db } from "../../../models/db";
import {
  ResponseInterfaces,
  ErrorsInterfaces,
} from "../../../../types/response.interfaces";

export class CursoRepositoryClass implements CursosRepository {
  #db: typeof db;
  constructor() {
    this.#db = db;
  }

  async findAllCursos(): Promise<
    ResponseInterfaces<any> | ErrorsInterfaces<any>
  > {
    try {
      const resp = await db.cocursos.findMany({
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
    } catch (error) {
      return { data: error, ok: true, status: 200 };
    }
  }
  async createCursosP(): Promise<
    ResponseInterfaces<any> | ErrorsInterfaces<any>
  > {
    try {
      
      
      const grados = await db.cogrados.findMany({
        select:{id:true, nombre:true}
      });

      console.log(grados)

      return { data:{ 'grados': grados}, ok: true, status: 200 };
    } catch (error) {
      return { data: error, ok: true, status: 200 };
    }
  }
  async storeCursos(
    body: CursoEntity
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    const { nombre, codigo, director_id, grado_id, sede_id } = body;

    try {
      await this.#db.cocursos.create({
        data: {
          nombre: nombre,
          codigo: codigo,
          director_id: director_id,
          grado_id: grado_id,
          sede_id: sede_id,
          created_by: 1,
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

  async showCurso(
    id: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    try {
      const resp = await db.cocursos.findMany({
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
    } catch (error) {
      return { data: error, ok: true, status: 200 };
    }
  }

  showCursoEdit(
    id: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    throw new Error("Method not implemented.");
  }
  updatedCurso(
    body: CursoEntity,
    id: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    throw new Error("Method not implemented.");
  }
  deleteCurso(
    id: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    throw new Error("Method not implemented.");
  }
}
