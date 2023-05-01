"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUsesCases = void 0;
const user_value_1 = require("../../domain/user/user.value");
class UserUsesCases {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async listUser(type, is) {
        const resp = await this.userRepository.findAllUser(type, is);
        return resp;
    }
    async createUser(body, userid, avatar) {
        const userValue = new user_value_1.UserCreateValue({ ...body });
        const resp = this.userRepository.registerUser(userValue, userid, avatar);
        return resp;
    }
    async authUser({ username, password, }) {
        const resp = this.userRepository.login({ username, password });
        return resp;
    }
    async userProfile(id) {
        const resp = await this.userRepository.userProfile(id);
        const resulst = new user_value_1.UserValue(resp.data);
        return { ...resp, data: resulst };
    }
    async UserUpdate(id, data) {
        const resp = this.userRepository.updatedUser(id, data);
        return resp;
    }
    async verifyToken(token, refreshToken) {
        const resp = this.userRepository.validateToken(token, refreshToken);
        return resp;
    }
}
exports.UserUsesCases = UserUsesCases;
//# sourceMappingURL=user.usesCases.js.map