import { PermissionsRepository } from "../../domain/permissions/permissions.repository";
export declare class PermissionsUsesCases {
    private readonly permissionsRepository;
    constructor(permissionsRepository: PermissionsRepository);
    listPermissions(): Promise<{
        status: number;
        data: import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>;
        ok: boolean;
    }>;
    showPermissions(id: number): Promise<void>;
}
//# sourceMappingURL=permissions.usesCases.d.ts.map