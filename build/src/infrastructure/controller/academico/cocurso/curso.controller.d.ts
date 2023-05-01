import { Request, Response } from "express";
import { CursosUsesCases } from "../../../../aplication/Academico/cocursos/cursos.usesCases";
export declare class CursosController {
    private CursosUsesCases;
    constructor(CursosUsesCases: CursosUsesCases);
    GetAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createCursosP: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    PostCurso: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showPermission: (req: Request, res: Response, id: number) => Promise<Response<any, Record<string, any>>>;
    showCurso: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showCursoEdit: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updatedCurso: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    delteCurso: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=curso.controller.d.ts.map