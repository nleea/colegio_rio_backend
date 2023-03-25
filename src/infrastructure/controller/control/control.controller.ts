import { Request, Response } from "express";
import { ControlUsesCases } from "../../../aplication/control/control.usesCases";
import { Ibody } from "@/types/control.interface";
export class ControlController {
  constructor(private controlUsesCases: ControlUsesCases) {}

  controlAsistencia = async (req: Request, res: Response) => {
    const body = req.body as Ibody;
    const param = req.params;
    const { data, ok, status } = await this.controlUsesCases.asistencia(
      body,
      param
    );
    return res.status(status).json({ ok, data });
  };

  asistenciaUsuario = async (req: Request, res: Response) => {
    const {id} = req.body;
    const { data, ok, status } = await this.controlUsesCases.asistenciaUsuario(
      id
    );

    return res.status(status).json({ data, ok });
  };
}
