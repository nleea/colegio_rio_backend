import { UserRepository } from "../../domain/user/user.repository";

export class UserUsesCases {
  constructor(private readonly userRepository: UserRepository) {}

  public async listUser() {
    const resp = await this.userRepository.findAllUser();
    return resp;
  }
}
