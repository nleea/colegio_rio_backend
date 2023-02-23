import { Request, Response } from "express";
import { UserCreateEntity, UserEntity } from "../../../domain/user/user.entity";
import { UserUsesCases } from "../../../aplication/user/user.usesCases";

export class UserController {
  constructor(private userUsesCases: UserUsesCases) {
    this.GetAll.bind(this);
  }

  GetAll = async (req: Request, res: Response) => {
    const { ok, status, data } = await this.userUsesCases.listUser();
    return res.status(status).json({ ok, data });
  };

  insertUser = async (req: Request, res: Response) => {
    const body = req.body as UserCreateEntity;
    const resp = await this.userUsesCases.createUser(body);
    return res.json(resp);
  };

  auth = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const resp = await this.userUsesCases.authUser({ username, password });
    return res.json(resp);
  };

  userProfile = async (req: Request, res: Response) => {
    const { id } = req.user! as UserEntity;
    const { data, ok, status } = await this.userUsesCases.userProfile(id);
    return res.status(status).json({ ok, data });
  };

  updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const body = req.body;
    const { data, ok, status } = await this.userUsesCases.UserUpdate(
      Number(id),
      body
    );
    return res.status(status).json({ ok, data });
  };
}
