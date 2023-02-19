import { UserEntity, UserCreateEntity } from "./user.entity";

export interface UserRepository {
  findAllUser(): Promise<any[] | null | any>;
  registerUser(body: UserCreateEntity): Promise<any>;
  login({ email, password }: { email: string; password: string }): Promise<any>;
}
