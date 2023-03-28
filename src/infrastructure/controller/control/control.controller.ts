import { Request, Response } from "express";
import { ControlUsesCases } from "@/aplication/control/control.usesCases";
import { Ibody } from "@/types/control.interface";
export class ControlController {
  constructor(private controlUsesCases: ControlUsesCases) {}

  controlAsistencia = async (req: Request, res: Response) => {
    const body = req.body as Ibody;
    const param = req.params;
    const { data, ok, status, header } = await this.controlUsesCases.asistencia(
      body,
      param
    );
    return res.status(status).json({ ok, data });
  };

  asistenciaUsuario = async (req: Request, res: Response) => {
    const { id } = req.body;
    const { data, ok, status } = await this.controlUsesCases.asistenciaUsuario(
      id
    );

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=quote.pdf");

    return res.status(status).send(data);
  };
}
