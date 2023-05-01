import { Request, Response } from "express";
import { ComunicacionesUsesCases } from "../../../../aplication/Comunicaciones/comunicaciones/comunicaciones.usesCases";
export declare class ComunicacionController {
    private ComunicacionesUsesCases;
    constructor(ComunicacionesUsesCases: ComunicacionesUsesCases);
    GetAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createComunicacionesP: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    PostComunicacion: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showPermission: (req: Request, res: Response, id: number) => Promise<Response<any, Record<string, any>>>;
    showComunicacion: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showComunicacionEdit: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updatedComunicacion: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    delteComunicacion: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=comunicaciones.controller.d.ts.map