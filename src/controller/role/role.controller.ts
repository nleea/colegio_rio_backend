import { Request, Response } from "express";
import { GetAllRoles} from "../../services/role/role.service";
import { RoleInterface } from "../../types/role.interface";

const getRole = async (req: Request, res: Response) => {
  const resp = await GetAllRoles();
  return res.json(resp);
};



export { getRole};
