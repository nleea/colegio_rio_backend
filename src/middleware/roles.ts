import { Request, Response } from "express";
import { UserEntity } from "../domain/user/user.entity";
import { db } from "../../src/infrastructure/models/db";

export const VerRoles = async (
  req: Request,
  res: Response,
  next: () => void
) => {
  const permissionVer = "ver-rol";
  try {
    if (!verifytoken(req))
      return res.status(403).json({ message: "Not token provided" });

    const { id } = req.user! as UserEntity;

    const tienePermiso = await consulta(id, permissionVer);
    if (!tienePermiso)
      return res.status(403).json({ message: "No tienes permisos!!" });
    next();
  } catch (error) {
    res.status(404).json({ message: "Unauthorized" });
  }
};

export const CreateRoles = async (
  req: Request,
  res: Response,
  next: () => void
) => {
  const permissionVer = "crear-rol";
  try {
    if (!verifytoken(req))
      return res.status(403).json({ message: "Not token provided" });

    const { id } = req.user! as UserEntity;
    const tienePermiso = await consulta(id, permissionVer);
    if (!tienePermiso)
      return res.status(403).json({ message: "No tienes permisos!!" });
    next();
  } catch (error) {
    res.status(404).json({ message: "Unauthorized" });
  }
};

/*
This code finds a unique user based on their ID, then checks to see if they have a given permission.
If the user is found and has the specified permission, tienePermiso returns true. Otherwise, it returns false.
*/

export const consulta = async (id: any, permissionVer: String) => {
  const resp = await db.users.findUnique({
    where: {
      id: id,
    },
    include: {
      roles: {
        select: {
          role_has_permissions: {
            select: { permissions: { select: { name: true } } },
          },
        },
      },
    },
  });

  if (!resp) return false;

  const permisos = resp?.roles?.role_has_permissions;

  let tienePermiso = Boolean(
    permisos?.some((role) => role.permissions.name === permissionVer)
  );

  return tienePermiso || false;
};

const verifytoken = (req: Request) => {
  const token = req.headers.authorization;
  if (!token) return false;

  return true;
};
