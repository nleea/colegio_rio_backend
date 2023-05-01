import { RoleEntity } from "./roles.entity";
import { ErrorsInterfaces, ResponseInterfaces } from "../../types/response.interfaces";
export interface RolesRepository {
    findAllRoles(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    createRolesP(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    storeRoles(body: RoleEntity): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    showRole(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    updatedRole(body: RoleEntity, id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    showRole(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    deleteRole(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    removePermission(id: number, role: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    addPermission(permission_id: number, role: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
}
//# sourceMappingURL=roles.repository.d.ts.map