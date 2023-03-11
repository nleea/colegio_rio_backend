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

  deleteModulos = async (req: Request, res: Response) => {
    const { rolId, modulos, rolName } = req.body;
    const { data, ok, status } = await this.modulesUsesCases.deleteModules(
      rolId,
      rolName,
      modulos
    );
    return res.status(status).json({ ok, data });
  };

  createModuleshasRole = async (req: Request, res: Response) => {
    const { rolId, modulos } = req.body;
    const { data, ok, status } =
      await this.modulesUsesCases.createModulosHasRoles(rolId, modulos);
    return res.status(status).json({ ok, data });
  };

  GetModulosHasRole = async (req: Request, res: Response) => {
    const { rolName, inModule } = req.body;
    const { data, ok, status } =
      await this.modulesUsesCases.listModulesHasRoles(rolName, inModule);
    return res.status(status).json({ ok, data });
  };

  GetAllModulesWithoutRoles = async (req: Request, res: Response) => {
    const { rolId } = req.body;
    const { data, ok, status } =
      await this.modulesUsesCases.listModulesWithoutRoles(rolId);
    return res.status(status).json({ data, ok });
  };
}
