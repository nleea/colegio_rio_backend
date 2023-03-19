import { Request, Response } from "express";
import { ComunicacionesUsesCases } from "../../../../aplication/Comunicaciones/comunicaciones/comunicaciones.usesCases";
import {
  ComunicacionCreateEntity,
  ComunicacionUpdateEntity,
} from "../../../../domain/Comunicaciones/comunicaciones/comunicaciones.entity";
import {
  ComunicacionCreateValue,
  ComunicacionUpdatedValue,
} from "../../../../domain/Comunicaciones/comunicaciones/comunicaciones.value";

export class ComunicacionController {
  constructor(
    private ComunicacionesUsesCases: ComunicacionesUsesCases,
  ) {}

  GetAll = async (req: Request, res: Response) => {
    
    const { data, ok, status } = await this.ComunicacionesUsesCases.listComunicaciones();
    return res.status(status).json({ data, ok });
  };

  createComunicacionesP = async (req: Request, res: Response) => {
    
    console.log('aca')
    const { data, ok, status } = await this.ComunicacionesUsesCases.createComunicacionesP();
    return res.status(status).json({ data, ok });
    
  };

  PostComunicacion = async (req: Request, res: Response) => {
    const body = req.body as ComunicacionCreateEntity;
    const Comunicacioncrea = new ComunicacionCreateValue(body);
    const { data, ok, status } = await this.ComunicacionesUsesCases.storeComunicaciones(Comunicacioncrea);
    return res.status(status).json({ data, ok });
  };

  showPermission = async (req: Request, res: Response, id: number) => {
    return res.json(id);
  };

  showComunicacion = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { data, ok, status } = await this.ComunicacionesUsesCases.showComunicacione(Number(id));
    return res.status(status).json({ data, ok });
  };
  showComunicacionEdit = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { data, ok, status } = await this.ComunicacionesUsesCases.showComunicacionEdit(Number(id));
    return res.status(status).json({ data, ok });
  };

  updatedComunicacion = async (req: Request, res: Response) => {
    const { id } = req.params;
    // console.log(req)
    const body = req.body as ComunicacionUpdateEntity;
    const Comunicacioncrea = new ComunicacionUpdatedValue(body);
    const resp = await this.ComunicacionesUsesCases.updatedComunicacion(Comunicacioncrea, Number(id));
    return res.json(resp);
  };

  delteComunicacion = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    // const resp = await this.ComunicacionesUsesCases.showComunicacion(Number(id));
    // await this.ComunicacionesUsesCases.deleteComunicacion(Number(id));
    // return res.json({ mensaje: "Rol deleted" });
    const { data, ok, status } = await this.ComunicacionesUsesCases.deleteComunicacion(Number(id));
    return res.status(status).json({ data, ok });
  };

}
