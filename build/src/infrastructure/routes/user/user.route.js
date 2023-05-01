"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeAuth = exports.route = void 0;
const express_1 = require("express");
const route = (0, express_1.Router)({ mergeParams: true });
exports.route = route;
const routeAuth = (0, express_1.Router)();
exports.routeAuth = routeAuth;
const user_controller_1 = require("../../controller/user/user.controller");
const UserRepository_1 = require("../../repository/userRepository/UserRepository");
const user_usesCases_1 = require("../../../aplication/user/user.usesCases");
const upload_1 = require("../../../helpers/upload");
const uploadMiddleware_1 = require("../../../middleware/uploadMiddleware");
/** Injeciones de dependencia*/
const UserRepository = new UserRepository_1.UserRepositoryClass();
const userUsescases = new user_usesCases_1.UserUsesCases(UserRepository);
const userController = new user_controller_1.UserController(userUsescases);
/** Rutas para la aplicaion */
route.post("/", userController.GetAll);
route.get("/profile/", userController.userProfile);
route.put("/edit/:id", userController.updateUser);
route.use("/register/", [upload_1.upload.single("avatar"), uploadMiddleware_1.UploadFileMiddleware], userController.insertUser);
/** Auth Routes */
routeAuth.post("/login/", userController.auth);
routeAuth.post("/token/verify/", userController.validateToken);
//# sourceMappingURL=user.route.js.map