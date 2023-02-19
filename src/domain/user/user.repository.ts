import { UserEntity } from "./user.entity";

export interface UserRepository {
  findAllUser(): Promise<any[] | null | any>;
  registerUser(body: UserEntity): Promise<any>;
}
