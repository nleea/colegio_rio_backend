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
  showRole(id:number): Promise<any[] | null | any>;
  updatedRole(body: RoleEntity, id:number
    ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  showRole(id:number): Promise<any[] | null | any>;
  deleteRole(id:number): Promise<any[] | null | any>;
  removePermission(id:number, role:number): Promise<any[] | null | any>;
  addPermission(permission_id:number, role:number): Promise<any[] | null | any>;
}
