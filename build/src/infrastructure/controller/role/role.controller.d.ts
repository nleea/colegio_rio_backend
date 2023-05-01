import { Request, Response } from "express";
import { RolesUsesCases } from "../../../aplication/roles/roles.usesCases";
import { PermissionsUsesCases } from "../../../aplication/permissions/permissions.usesCases";
export declare class RolesController {
    private rolesUsesCases;
    private permissionsUsesCases;
    constructor(rolesUsesCases: RolesUsesCases, permissionsUsesCases: PermissionsUsesCases);
    GetAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    GetCreateRole: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    PostRole: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showPermission: (req: Request, res: Response, id: number) => Promise<Response<any, Record<string, any>>>;
    showRole: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updatedRole: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    delteRole: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    removePermission: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addPermission: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=role.controller.d.ts.map