import { Request, Response } from "express";
import { UserCreateEntity } from "../../../domain/user/user.entity";
import { UserUsesCases } from "../../../aplication/user/user.usesCases";

export class UserController {
  constructor(private userUsesCases: UserUsesCases) {
    this.GetAll.bind(this);
  }

  GetAll = async (req: Request, res: Response) => {
    const resp = await this.userUsesCases.listUser();
    return res.json(resp);
  };

  insertUser = async (req: Request, res: Response) => {
    const body = req.body as UserCreateEntity;
    const resp = await this.userUsesCases.createUser(body);
    return res.json(resp);
  };
}
