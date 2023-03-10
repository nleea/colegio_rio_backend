import { Request, Response } from "express";
import { CursosUsesCases } from "../../../../aplication/Academico/cocursos/cursos.usesCases";
import {
  CursoCreateEntity,
  CursoUpdateEntity,
} from "../../../../domain/Academico/cocursos/cursos.entity";
import {
  CursoCreateValue,
  CursoUpdatedValue,
} from "../../../../domain/Academico/cocursos/cursos.value";

export class CursosController {
  constructor(
    private CursosUsesCases: CursosUsesCases,
  ) {}

  GetAll = async (req: Request, res: Response) => {
    
    const { data, ok, status } = await this.CursosUsesCases.listCursos();
    return res.status(status).json({ data, ok });
  };

  createCursosP = async (req: Request, res: Response) => {
    
    console.log('aca')
    const { data, ok, status } = await this.CursosUsesCases.createCursosP();
    return res.status(status).json({ data, ok });
    
  };

  PostCurso = async (req: Request, res: Response) => {
    const body = req.body as CursoCreateEntity;
    const Cursocrea = new CursoCreateValue(body);
    const { data, ok, status } = await this.CursosUsesCases.storeCursos(Cursocrea);
    return res.status(status).json({ data, ok });
  };

  showPermission = async (req: Request, res: Response, id: number) => {
    return res.json(id);
  };

  showCurso = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { data, ok, status } = await this.CursosUsesCases.showCurso(Number(id));
    return res.status(status).json({ data, ok });
  };
  showCursoEdit = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { data, ok, status } = await this.CursosUsesCases.showCursoEdit(Number(id));
    return res.status(status).json({ data, ok });
  };

  updatedCurso = async (req: Request, res: Response) => {
    const { id } = req.params;
    // console.log(req)
    const body = req.body as CursoUpdateEntity;
    const Cursocrea = new CursoUpdatedValue(body);
    const resp = await this.CursosUsesCases.updatedCurso(Cursocrea, Number(id));
    return res.json(resp);
  };

  delteCurso = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    // const resp = await this.CursosUsesCases.showCurso(Number(id));
    // await this.CursosUsesCases.deleteCurso(Number(id));
    // return res.json({ mensaje: "Rol deleted" });
    const { data, ok, status } = await this.CursosUsesCases.deleteCurso(Number(id));
    return res.status(status).json({ data, ok });
  };

}
