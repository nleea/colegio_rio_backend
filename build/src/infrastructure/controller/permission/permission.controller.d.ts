import { Request, Response } from "express";
import { PermissionsUsesCases } from "../../../aplication/permissions/permissions.usesCases";
export declare class PermissionsController {
    private permissionsUsesCases;
    constructor(permissionsUsesCases: PermissionsUsesCases);
    GetAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=permission.controller.d.ts.map