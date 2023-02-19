import { UserCreateEntity } from "../../domain/user/user.entity";
import { UserRepository } from "../../domain/user/user.repository";
import { UserCreateValue } from "../../domain/user/user.value";

export class UserUsesCases {
  constructor(private readonly userRepository: UserRepository) {}

  public async listUser() {
    const resp = await this.userRepository.findAllUser();
    return resp;
  }

  public async createUser(body: UserCreateEntity) {
    const userValue = new UserCreateValue({ ...body });
    const resp = this.userRepository.registerUser(userValue);
    return resp;
  }

  public async authUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const resp = this.userRepository.login({ email, password });
    return resp;
  }

  public async userProfile(id: number) {
    const resp = this.userRepository.userProfile(id);
    return resp;
  }
}
