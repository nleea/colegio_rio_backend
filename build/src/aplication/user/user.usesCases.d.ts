import { UserCreateEntity, UserUpdateEntity } from "../../domain/user/user.entity";
import { UserRepository } from "../../domain/user/user.repository";
import { UserValue } from "../../domain/user/user.value";
export declare class UserUsesCases {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    listUser(type: string, is: boolean): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
    createUser(body: UserCreateEntity, userid: number, avatar?: string): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
    authUser({ username, password, }: {
        username: string;
        password: string;
    }): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
    userProfile(id: number): Promise<{
        data: UserValue;
        status: number;
        ok: boolean;
        header?: any;
    } | {
        data: UserValue;
        status: number;
        ok: boolean;
        header?: any;
    }>;
    UserUpdate(id: number, data: UserUpdateEntity): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
    verifyToken(token: string, refreshToken: string): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
}
//# sourceMappingURL=user.usesCases.d.ts.map