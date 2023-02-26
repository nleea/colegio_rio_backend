import { ModulesEntity } from "./modules.entity";
import {
  ErrorsInterfaces,
  ResponseInterfaces,
} from "../../types/response.interfaces";

export interface ModulesRepository {
  findAllModules(): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>>;
  createModules(
    rol: number,
    body: ModulesEntity[]
  ): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>>;
  deleteModule(
    rolId: Number,
    modulos: any[]
  ): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>>;
  createModuleRol(
    rolId: Number,
    modulos: any[]
  ): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>>;
}
