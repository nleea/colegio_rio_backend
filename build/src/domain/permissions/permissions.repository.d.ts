import { PermissionsEntity } from "./permissions.entity";
import { ErrorsInterfaces, ResponseInterfaces } from "../../types/response.interfaces";
export interface PermissionsRepository {
    findAllPermissions(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    createPermissions(Permissions: PermissionsEntity): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    showPermissions(Permissions: Number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
}
//# sourceMappingURL=permissions.repository.d.ts.map