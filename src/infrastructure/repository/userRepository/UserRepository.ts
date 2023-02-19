import { UserRepository } from "../../../domain/user/user.repository";
import { UserEntity } from "../../../domain/user/user.entity";
import { db } from "../../models/db";

export class UserRepositoryClass implements UserRepository {
  async findAllUser(): Promise<any[] | null | any> {
    try {
      return await db.users.findMany();
    } catch (error) {
      console.log(error);
    }
  }

  async registerUser(body: UserEntity): Promise<any> {
    throw new Error("Method not implemented");
  }
}
