import { Request, Response } from "express";
import { RolesUsesCases } from "../../../aplication/roles/roles.usesCases";
import { PermissionsUsesCases } from "../../../aplication/permissions/permissions.usesCases";
import { RoleCreateEntity } from "../../../domain/roles/roles.entity";
import { RoleCreateValue } from "../../../domain/roles/roles.value";

export class RolesController {
  constructor(
    private rolesUsesCases: RolesUsesCases,
    private permissionsUsesCases: PermissionsUsesCases
    ) {}

  GetAll = async (req: Request, res: Response) => {
    const resp = await this.rolesUsesCases.listRoles();
    return res.json(resp);
  };

  GetCreateRole = async (req: Request, res: Response) => {
    // createRoles

    const resp = await this.permissionsUsesCases.listPermissions()
    return res.json(resp);
  }

  PostRole = async (req: Request, res: Response) => {
    const body = req.body as RoleCreateEntity;
    const rolecrea = new RoleCreateValue(body);
    const resp = await this.rolesUsesCases.storeRoles(rolecrea); 
    return res.json(resp);
  }
}
