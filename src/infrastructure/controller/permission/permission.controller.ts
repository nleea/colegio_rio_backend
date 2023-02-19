
import { Request, Response } from "express";
import { PermissionsUsesCases } from "../../../aplication/permissions/permissions.usesCases";

export class PermissionsController {
  constructor(private permissionsUsesCases: PermissionsUsesCases) {}

  GetAll = async (req: Request, res: Response) => {
    const resp = await this.permissionsUsesCases.listPermissions();
    return res.json(resp);
  };
}
