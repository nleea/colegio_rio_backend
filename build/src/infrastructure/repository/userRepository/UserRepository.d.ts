import { UserRepository } from "../../../domain/user/user.repository";
import { UserCreateEntity, UserEntity, UserUpdateEntity } from "../../../domain/user/user.entity";
import { ResponseInterfaces, ErrorsInterfaces } from "../../../types/response.interfaces";
export declare class UserRepositoryClass implements UserRepository {
    #private;
    constructor();
    findAllUser(type: string, is: boolean): Promise<ResponseInterfaces<UserEntity[]> | ErrorsInterfaces<unknown>>;
    registerUser(body: UserCreateEntity, userid: number, avatar?: string): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    login({ username, password, }: {
        username: string;
        password: string;
    }): Promise<ResponseInterfaces<any> | ErrorsInterfaces<string | any>>;
    userProfile(id: number): Promise<ResponseInterfaces<UserEntity> | ErrorsInterfaces<any>>;
    updatedUser(id: number, data: Omit<Partial<UserUpdateEntity>, "roles">): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    validateToken(token: string, refreshToken: string): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
}
//# sourceMappingURL=UserRepository.d.ts.map