import { UserCreateEntity, UserUpdateEntity } from "./user.entity";
import {
  ErrorsInterfaces,
  ResponseInterfaces,
} from "../../types/response.interfaces";

export interface UserRepository {
  findAllUser(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  registerUser(
    body: UserCreateEntity
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  userProfile(
    id: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  updatedUser(
    id: number,
    data: Partial<UserUpdateEntity>
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
}
