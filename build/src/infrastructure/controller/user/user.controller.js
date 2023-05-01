"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    userUsesCases;
    constructor(userUsesCases) {
        this.userUsesCases = userUsesCases;
        this.GetAll.bind(this);
    }
    GetAll = async (req, res) => {
        const { type, is } = req.body;
        const { ok, status, data } = await this.userUsesCases.listUser(type, is);
        return res.status(status).json({ ok, data });
    };
    insertUser = async (req, res) => {
        const body = req.body;
        const { data, ok, status } = await this.userUsesCases.createUser(body, 2, req.file?.path);
        return res.status(status).json({ data, ok });
    };
    auth = async (req, res) => {
        const { username, password } = req.body;
        const { data, ok, status } = await this.userUsesCases.authUser({
            username,
            password,
        });
        return res.status(status).json({ data, ok });
    };
    userProfile = async (req, res) => {
        const { id } = req.user;
        const { data, ok, status } = await this.userUsesCases.userProfile(id);
        return res.status(status).json({ ok, data });
    };
    updateUser = async (req, res) => {
        const { id } = req.params;
        const body = req.body;
        const { data, ok, status } = await this.userUsesCases.UserUpdate(Number(id), body);
        return res.status(status).json({ ok, data });
    };
    validateToken = async (req, res) => {
        const { token, refreshToken } = req.body;
        const { data, ok, status } = await this.userUsesCases.verifyToken(token, refreshToken);
        return res.status(status).json({ data, ok });
    };
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map