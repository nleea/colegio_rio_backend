import { Request, Response } from "express";
import { RolesUsesCases } from "../../../aplication/roles/roles.usesCases";

export class RolesController {
  constructor(private rolesUsesCases: RolesUsesCases) {}

  GetAll = async (req: Request, res: Response) => {
    const resp = await this.rolesUsesCases.listRoles();
    return res.json(resp);
  };

  GetCreateRole = async (req: Request, res: Response) => {
    // createRoles

    const resp = await this.rolesUsesCases.createRoles()
    return res.json(resp);
  }
}
