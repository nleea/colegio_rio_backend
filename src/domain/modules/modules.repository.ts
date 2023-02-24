import { ModulesEntity } from "./modules.entity";
import {
  ErrorsInterfaces,
  ResponseInterfaces,
} from "../../types/response.interfaces";

export interface ModulesRepository {
  findAllModules(): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>>;
}
