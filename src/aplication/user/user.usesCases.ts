import {
  UserCreateEntity,
  UserUpdateEntity,
} from "../../domain/user/user.entity";
import { UserRepository } from "../../domain/user/user.repository";
import { UserCreateValue, UserValue } from "../../domain/user/user.value";

export class UserUsesCases {
  constructor(private readonly userRepository: UserRepository) {}

  public async listUser(type: string, is: boolean) {
    const resp = await this.userRepository.findAllUser(type, is);
    return resp;
  }

  public async createUser(
    body: UserCreateEntity,
    userid: number,
    avatar?: string
  ) {
    const userValue = new UserCreateValue({ ...body });
    const resp = this.userRepository.registerUser(userValue, userid, avatar);
    return resp;
  }

  public async authUser({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    const resp = this.userRepository.login({ username, password });
    return resp;
  }

  public async userProfile(id: number) {
    const resp = await this.userRepository.userProfile(id);
    const resulst = new UserValue(resp.data);
    return { ...resp, data: resulst };
  }

  public async UserUpdate(id: number, data: UserUpdateEntity) {
    const resp = this.userRepository.updatedUser(id, data);
    return resp;
  }

  public async verifyToken(token: string, refreshToken: string) {
    const resp = this.userRepository.validateToken(token, refreshToken);
    return resp;
  }
}
