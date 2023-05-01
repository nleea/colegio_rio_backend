import { Request, Response } from "express";
import { AreasUsesCases } from "../../../../aplication/Academico/coareas/areas.usesCases";
export declare class AreaController {
    private AreasUsesCases;
    constructor(AreasUsesCases: AreasUsesCases);
    GetAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createAreasP: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    PostArea: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showPermission: (req: Request, res: Response, id: number) => Promise<Response<any, Record<string, any>>>;
    showArea: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showAreaEdit: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updatedArea: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    delteArea: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=area.controller.d.ts.map