import { Request, Response } from "express";
import { UserUsesCases } from "../../../aplication/user/user.usesCases";

export class UserController {
  constructor(private userUsesCases: UserUsesCases) {
    this.GetAll.bind(this);
  }

  GetAll = async (req: Request, res: Response) => {
    const resp = await this.userUsesCases.listUser();
    return res.json(resp);
  };
}
