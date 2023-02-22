import { Request, Response } from "express";
import { RolesUsesCases } from "/../riodev/colegio_rio_backend/src/aplication/roles/roles.usesCases";
import { PermissionsUsesCases } from "/../riodev/colegio_rio_backend/src/aplication/permissions/permissions.usesCases";
import { RoleCreateEntity } from "/../riodev/colegio_rio_backend/src/domain/roles/roles.entity";
import { RoleCreateValue } from "/../riodev/colegio_rio_backend/src/domain/roles/roles.value";
import { UserEntity } from "../domain/user/user.entity";
import { UserUsesCases } from "../aplication/user/user.usesCases";
import { db } from "../../src/infrastructure/models/db";

export const VerRoles = async (
  req: Request,
  res: Response,
  next: () => void
) => {
  const permissionVer = "ver-rol";

  try {
    const token = req.headers.authorization;
    // console.log(req.headers.authorization)

    if (!token) return res.status(403).json({ message: "Not token provided" });

    const id = req.user! as UserEntity;

    const resp = await db.users.findMany({
      where: {
        id: id.id,
      },
      include: {roles_users_role_idToroles:{include:{role_has_permissions:{include:{permissions:true}}}}}
    });

    // if (!resp) return res.status(403).json({ message: "No tienes permisos!!" });

    const permisos = resp[0].roles_users_role_idToroles?.role_has_permissions;

    let tienePermiso = false;
    permisos?.forEach( role => {
      // console.log(role)

      if(role.permissions.name == permissionVer){
        tienePermiso = true;
      }else{
        console.log(role.permissions.name + ' - ' + permissionVer)
      }
    })

    if (!tienePermiso) return res.status(403).json({ message: "No tienes permisos!!" });

    next();
  } catch (error) {
    res.status(404).json({ message: "Unauthorized" });
  }
};
