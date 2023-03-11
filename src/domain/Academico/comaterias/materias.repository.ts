import { MateriaEntity } from "./materias.entity";
import {
  ErrorsInterfaces,
  ResponseInterfaces,
} from "../../../types/response.interfaces";
export interface MateriasRepository {
  findAllMaterias(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  createMateriasP(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  storeMaterias(
    body: MateriaEntity
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  showMateria(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  updatedMateria(
    body: MateriaEntity,
    id: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  showCurso(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  showCursoEdit(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  deleteCurso(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
}
