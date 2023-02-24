import { Request, Response } from "express";
import { ModulesUsesCases } from "../../../aplication/modules/modules.usescases";

export class ModulesController {
  constructor(private modulesUsesCases: ModulesUsesCases) {}

  getAll = async (req: Request, res: Response) => {
    const { data, ok, status } = await this.modulesUsesCases.listModules();
    return res.status(status).json({ ok, data });
  };
}
