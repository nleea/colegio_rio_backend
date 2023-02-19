
import { PermissionsEntity } from "./permissions.entity";

export interface PermissionsRepository {
  findAllPermissions(): Promise<any[] | null | any>;
  createPermissions(Permissions: PermissionsEntity): Promise<any>;
}
