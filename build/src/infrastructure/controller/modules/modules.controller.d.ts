import { Request, Response } from "express";
import { ModulesUsesCases } from "../../../aplication/modules/modules.usescases";
export declare class ModulesController {
    private modulesUsesCases;
    constructor(modulesUsesCases: ModulesUsesCases);
    getAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    insertModules: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteModulos: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createModuleshasRole: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    GetModulosHasRole: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    GetAllModulesWithoutRoles: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=modules.controller.d.ts.map