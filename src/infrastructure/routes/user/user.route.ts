import { Router } from "express";

const route = Router({ mergeParams: true });
const routeAuth = Router();
import { UserController } from "../../controller/user/user.controller";
import { UserRepositoryClass } from "../../repository/userRepository/UserRepository";
import { UserUsesCases } from "../../../aplication/user/user.usesCases";

/** Injeciones de dependencia*/
const UserRepository = new UserRepositoryClass();
const userUsescases = new UserUsesCases(UserRepository);
const userController = new UserController(userUsescases);

/** Rutas para la aplicaion */

route.get("/", userController.GetAll);
route.get("/profile/", userController.userProfile);
/** Auth Routes */
routeAuth.post("/register/", userController.insertUser);
routeAuth.post("/login/", userController.auth);

/** export properties */
export { route, routeAuth };
