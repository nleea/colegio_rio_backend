import { RoleCreateEntity, RoleUpdateEntity } from "../../domain/roles/roles.entity";
import { RolesRepository } from "../../domain/roles/roles.repository";
export declare class RolesUsesCases {
    private readonly rolesRepository;
    constructor(rolesRepository: RolesRepository);
    listRoles(): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
    createRolesP(): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
    storeRoles(body: RoleCreateEntity): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
    showRole(id: number): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
    updatedRole(body: RoleUpdateEntity, id: number): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
    deleteRole(id: number): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
    removePermission(id: number, role: number): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
    addPermission(permission_id: number, role: number): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
}
//# sourceMappingURL=roles.usesCases.d.ts.map