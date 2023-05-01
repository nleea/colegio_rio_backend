import { RolesRepository } from "../../../domain/roles/roles.repository";
import { RoleCreateEntity, RoleUpdateEntity } from "../../../domain/roles/roles.entity";
import { ResponseInterfaces, ErrorsInterfaces } from "../../../types/response.interfaces";
export declare class RolesRepositoryClass implements RolesRepository {
    #private;
    constructor();
    findAllRoles(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    showRole(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    createRolesP(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    storeRoles(body: RoleCreateEntity): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    showRolesPermissions(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    deleteRole(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    updatedRole(body: RoleUpdateEntity, id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    removePermission(id: number, role: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    addPermission(permission_id: number, role: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
}
//# sourceMappingURL=rolesRepository.d.ts.map