import { Request, Response } from "express";
import { AreasUsesCases } from "../../../../aplication/Academico/coareas/areas.usesCases";
import {
  AreaCreateEntity,
  AreaUpdateEntity,
} from "../../../../domain/Academico/coareas/areas.entity";
import {
  AreaCreateValue,
  AreaUpdatedValue,
} from "../../../../domain/Academico/coareas/areas.value";

export class AreasController {
  constructor(
    private AreasUsesCases: AreasUsesCases,
  ) {}

  GetAll = async (req: Request, res: Response) => {
    
    const { data, ok, status } = await this.AreasUsesCases.listAreas();
    return res.status(status).json({ data, ok });
  };

  createAreasP = async (req: Request, res: Response) => {
    
    console.log('aca')
    const { data, ok, status } = await this.AreasUsesCases.createAreasP();
    return res.status(status).json({ data, ok });
    
  };

  PostArea = async (req: Request, res: Response) => {
    const body = req.body as AreaCreateEntity;
    const Areacrea = new AreaCreateValue(body);
    const { data, ok, status } = await this.AreasUsesCases.storeAreas(Areacrea);
    return res.status(status).json({ data, ok });
  };

  showPermission = async (req: Request, res: Response, id: number) => {
    return res.json(id);
  };

  showArea = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { data, ok, status } = await this.AreasUsesCases.showArea(Number(id));
    return res.status(status).json({ data, ok });
  };
  showAreaEdit = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { data, ok, status } = await this.AreasUsesCases.showAreaEdit(Number(id));
    return res.status(status).json({ data, ok });
  };

  updatedArea = async (req: Request, res: Response) => {
    const { id } = req.params;
    // console.log(req)
    const body = req.body as AreaUpdateEntity;
    const Areacrea = new AreaUpdatedValue(body);
    const resp = await this.AreasUsesCases.updatedArea(Areacrea, Number(id));
    return res.json(resp);
  };

  delteArea = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    // const resp = await this.AreasUsesCases.showArea(Number(id));
    // await this.AreasUsesCases.deleteArea(Number(id));
    // return res.json({ mensaje: "Rol deleted" });
    const { data, ok, status } = await this.AreasUsesCases.deleteArea(Number(id));
    return res.status(status).json({ data, ok });
  };

}
