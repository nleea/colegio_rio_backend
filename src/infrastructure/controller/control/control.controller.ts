import { Request, Response } from "express";
import { ControlUsesCases } from "../../../aplication/control/control.usesCases";
import { Ibody } from "@/types/control.interface";
export class ControlController {
  constructor(private controlUsesCases: ControlUsesCases) {}

  controlAsistencia = async (req: Request, res: Response) => {
    const body = req.body as Ibody;
    const { data, ok, status } = await this.controlUsesCases.asistencia(body);
    return res.status(status).json({ ok, data });
  };
}
