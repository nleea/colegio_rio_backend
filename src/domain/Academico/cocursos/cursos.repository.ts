import { CursoEntity } from "./cursos.entity";
import {
  ErrorsInterfaces,
  ResponseInterfaces,
} from "../../../types/response.interfaces";
export interface CursosRepository {
  findAllCursos(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  createCursosP(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  storeCursos(
    body: CursoEntity
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  showCurso(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  updatedCurso(
    body: CursoEntity,
    id: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  showCurso(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  deleteCurso(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
}
