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
  async findAllCursos(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    try {
      const resp = await db.cocursos.findMany({
        include:{
          cogrados:{select:{id:true, nombre:true, sede_id:true}},
          // cofuncionarios:{select:{persona_id:}}
        },
      });
      // const resp = await db.cocursos.findMany({
      //   select:{codigo:true, nombre:true,grado_id:true, sede_id:true},
      //   include:{cogrados:tr}
      // });

      return { data: resp, ok: true, status: 200 };
    } catch (error) {
      return { data: error, ok: true, status: 200 };
    }
  }
  createCursosP(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    throw new Error("Method not implemented.");
  }
  storeCursos(body: CursoEntity): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    throw new Error("Method not implemented.");
  }
  showCurso(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  showCurso(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  showCurso(id: unknown): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    throw new Error("Method not implemented.");
  }
  updatedCurso(body: CursoEntity, id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    throw new Error("Method not implemented.");
  }
  deleteCurso(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    throw new Error("Method not implemented.");
  }

}
