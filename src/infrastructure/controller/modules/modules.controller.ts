import { Request, Response } from "express";
import { ModulesUsesCases } from "../../../aplication/modules/modules.usescases";
import { ModulesEntity } from "../../../domain/modules/modules.entity";
import { ModulesValue } from "../../../domain/modules/modules.value";

export class ModulesController {
  constructor(private modulesUsesCases: ModulesUsesCases) {}

  getAll = async (req: Request, res: Response) => {
    const { data, ok, status } = await this.modulesUsesCases.listModules();
    return res.status(status).json({ ok, data });
  };

  insertModules = async (req: Request, res: Response) => {
    const { moduleValues, rolId } = req.body as {
      moduleValues: ModulesEntity[];
      rolId: number;
    };
    //const moduleValues = new ModulesValue({ ...moduleValue });
    const { data, ok, status } = await this.modulesUsesCases.createModules(
      rolId,
      moduleValues
    );
    return res.status(status).json({ ok, data });
  };
}
