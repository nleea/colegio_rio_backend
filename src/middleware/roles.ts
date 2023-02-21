import { Request, Response } from "express";
import { RolesUsesCases } from "/../riodev/colegio_rio_backend/src/aplication/roles/roles.usesCases"
import { PermissionsUsesCases } from "/../riodev/colegio_rio_backend/src/aplication/permissions/permissions.usesCases";
import { RoleCreateEntity } from "/../riodev/colegio_rio_backend/src/domain/roles/roles.entity";
import { RoleCreateValue } from "/../riodev/colegio_rio_backend/src/domain/roles/roles.value";
import { UserEntity } from "../domain/user/user.entity";
import { UserUsesCases } from "../aplication/user/user.usesCases";
import { db } from "../../src/infrastructure/models/db";



export const VerRoles = async (req: Request, res: Response, next: () => void) => {
    const permission = 'ver-rol';
    
    try {
      const token = req.headers.authorization;
      // console.log(req.headers.authorization)
  
      if (!token) return res.status(403).json({ message: "Not token provided" });
  
      const id = req.user! as UserEntity;
  
      
    
      const resp = await db.permissions.findMany();
      // console.log("id.role_id: ")
      console.log(resp )
      next();
    } catch (error) {
      res.status(404).json({ message: 'Unauthorized' });
    }
  };