import { Request, Response } from "express";
import { GetAllUsers, registerUser } from "../../services/user/user.service";
import { UserInterface } from "../../types/user.interface";

const getUser = async (req: Request, res: Response) => {
  const resp = await GetAllUsers();
  return res.json(resp);
};

const insertUser = async (req: Request, res: Response) => {
  const body: UserInterface = req.body;
  const { message, status } = await registerUser(body);
  return res.status(status).json(message);
};

export { getUser, insertUser };
