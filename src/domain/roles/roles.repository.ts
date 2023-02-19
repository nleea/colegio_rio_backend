import { RolesEntity } from "./roles.entity";

export interface RolesRepository {
  findAllRoles(): Promise<any[] | null | any>;
  createRolesP(): Promise<any>;
}
