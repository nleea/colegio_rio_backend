import { Request, Response } from "express";
import { MateriasUsesCases } from "../../../../aplication/Academico/comaterias/materias.usesCases";
import {
  MateriaCreateEntity,
  MateriaUpdateEntity,
} from "../../../../domain/Academico/comaterias/materias.entity";
import {
  MateriaCreateValue,
  MateriaUpdatedValue,
} from "../../../../domain/Academico/comaterias/materias.value";

export class MateriasController {
  constructor(
    private MateriasUsesCases: MateriasUsesCases,
  ) {}

  GetAll = async (req: Request, res: Response) => {
    
    const { data, ok, status } = await this.MateriasUsesCases.listMaterias();
    return res.status(status).json({ data, ok });
  };

  createMateriasP = async (req: Request, res: Response) => {
    
    console.log('aca')
    const { data, ok, status } = await this.MateriasUsesCases.createMateriasP();
    return res.status(status).json({ data, ok });
    
  };

  PostMateria = async (req: Request, res: Response) => {
    const body = req.body as MateriaCreateEntity;
    const Materiacrea = new MateriaCreateValue(body);
    const { data, ok, status } = await this.MateriasUsesCases.storeMaterias(Materiacrea);
    return res.status(status).json({ data, ok });
  };

  showPermission = async (req: Request, res: Response, id: number) => {
    return res.json(id);
  };

  showMateria = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { data, ok, status } = await this.MateriasUsesCases.showMateria(Number(id));
    return res.status(status).json({ data, ok });
  };
  showMateriaEdit = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { data, ok, status } = await this.MateriasUsesCases.showMateriaEdit(Number(id));
    return res.status(status).json({ data, ok });
  };

  updatedMateria = async (req: Request, res: Response) => {
    const { id } = req.params;
    // console.log(req)
    const body = req.body as MateriaUpdateEntity;
    const Materiacrea = new MateriaUpdatedValue(body);
    const resp = await this.MateriasUsesCases.updatedMateria(Materiacrea, Number(id));
    return res.json(resp);
  };

  delteMateria = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    // const resp = await this.MateriasUsesCases.showMateria(Number(id));
    // await this.MateriasUsesCases.deleteMateria(Number(id));
    // return res.json({ mensaje: "Rol deleted" });
    const { data, ok, status } = await this.MateriasUsesCases.deleteMateria(Number(id));
    return res.status(status).json({ data, ok });
  };

}
