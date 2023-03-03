import { Request, Response } from "express";
import { RolesUsesCases } from "../../../aplication/roles/roles.usesCases";
import { PermissionsUsesCases } from "../../../aplication/permissions/permissions.usesCases";
import {
  RoleCreateEntity,
  RoleUpdateEntity,
} from "../../../domain/roles/roles.entity";
import {
  RoleCreateValue,
  RoleUpdatedValue,
} from "../../../domain/roles/roles.value";

export class RolesController {
  constructor(
    private rolesUsesCases: RolesUsesCases,
    private permissionsUsesCases: PermissionsUsesCases
  ) {}

  GetAll = async (req: Request, res: Response) => {
    const { data, ok, status } = await this.rolesUsesCases.listRoles();
    return res.status(status).json({ data, ok });
  };

  GetCreateRole = async (req: Request, res: Response) => {
    // createRoles

    const resp = await this.permissionsUsesCases.listPermissions();

    return res.json(resp);
  };

  PostRole = async (req: Request, res: Response) => {
    const body = req.body as RoleCreateEntity;
    const rolecrea = new RoleCreateValue(body);
    const { data, ok, status } = await this.rolesUsesCases.storeRoles(rolecrea);
    return res.status(status).json({ data, ok });
  };

  showPermission = async (req: Request, res: Response, id: number) => {
    return res.json(id);
  };

  showRole = async (req: Request, res: Response) => {
    const { id } = req.params;

    const resp = await this.rolesUsesCases.showRole(Number(id));
    //if (resp.length == 0) return res.json("Rol undefined");
    const permissions = await this.permissionsUsesCases.listPermissions();
    return res.json({ rol: resp, permissions: permissions });
  };

  updatedRole = async (req: Request, res: Response) => {
    const { id } = req.params;
    // console.log(req)
    const body = req.body as RoleUpdateEntity;
    const rolecrea = new RoleUpdatedValue(body);
    const resp = await this.rolesUsesCases.updatedRole(rolecrea, Number(id));
    return res.json(resp);
  };

  delteRole = async (req: Request, res: Response) => {
    const { id } = req.params;
    // console.log(req)
    const resp = await this.rolesUsesCases.showRole(Number(id));
    //if (resp.length == 0) return res.json("Rol undefined");
    await this.rolesUsesCases.deleteRole(Number(id));
    return res.json({ mensaje: "Rol deleted" });
  };

  removePermission = async (req: Request, res: Response) => {
    const { id } = req.params;

    const roleUser = (req.user as any)!.role_id;
    const PermissionDelte = await this.rolesUsesCases.removePermission(
      Number(id),
      Number(roleUser)
    );
    return res.json({ mensaje: PermissionDelte });
  };

  addPermission = async (req: Request, res: Response) => {
    const permission_id = req.body.permission_id;
    const role_id = req.body.role_id;

    // console.log(permission_id + ' - '+  role_id)
    const PermissionAdd = await this.rolesUsesCases.addPermission(
      Number(permission_id),
      Number(role_id)
    );
    return res.json({ mensaje: PermissionAdd });
  };
}
