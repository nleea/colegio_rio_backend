import { RolesEntity } from "./roles.entity";

export interface RolesRepository {
  findAllRoles(): Promise<any[] | null | any>;
  createRoles(roles: RolesEntity): Promise<any>;
}
