import { PermissionsRepository } from "../../../domain/permissions/permissions.repository";
import { PermissionsEntity } from "../../../domain/permissions/permissions.entity";
export declare class PermissionsRepositoryClass implements PermissionsRepository {
    showPermissions(Permissions: Number): Promise<any>;
    findAllPermissions(): Promise<any>;
    createPermissions(permissions: PermissionsEntity): Promise<any>;
}
//# sourceMappingURL=permissionsRepository.d.ts.map