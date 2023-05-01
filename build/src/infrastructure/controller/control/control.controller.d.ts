import { Request, Response } from "express";
import { ControlUsesCases } from "@/aplication/control/control.usesCases";
export declare class ControlController {
    private controlUsesCases;
    constructor(controlUsesCases: ControlUsesCases);
    controlAsistencia: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    asistenciaUsuario: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    asistenciaUsuarioQuery: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=control.controller.d.ts.map