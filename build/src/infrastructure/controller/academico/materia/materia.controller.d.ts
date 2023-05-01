import { Request, Response } from "express";
import { MateriasUsesCases } from "../../../../aplication/Academico/comaterias/materias.usesCases";
export declare class MateriasController {
    private MateriasUsesCases;
    constructor(MateriasUsesCases: MateriasUsesCases);
    GetAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createMateriasP: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    PostMateria: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showPermission: (req: Request, res: Response, id: number) => Promise<Response<any, Record<string, any>>>;
    showMateria: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showMateriaEdit: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updatedMateria: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    delteMateria: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=materia.controller.d.ts.map