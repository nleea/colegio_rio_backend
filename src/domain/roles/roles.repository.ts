import { RoleEntity } from "./roles.entity";
import {
  ErrorsInterfaces,
  ResponseInterfaces,
} from "../../types/response.interfaces";
export interface RolesRepository {
  findAllRoles(): Promise<any[] | null | any>;
  createRolesP(): Promise<any[] | null | any>;
  storeRoles(body: RoleEntity
    ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
}
