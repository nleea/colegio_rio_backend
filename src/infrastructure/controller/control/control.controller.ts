import { Request, Response } from "express";
import { ControlUsesCases } from "../../../aplication/control/control.usesCases";

export class ControlController {
  constructor(private controlUsesCases: ControlUsesCases) {}

  controlAsistencia = async (req: Request, res: Response) => {
    const { identificacion } = req.body;
    const { data, ok, status } = await this.controlUsesCases.asistencia(
      identificacion
    );
    return res.status(status).json({ ok, data });
  };
}
