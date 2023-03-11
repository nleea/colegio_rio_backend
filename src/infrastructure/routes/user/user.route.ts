import { Router } from "express";

const route = Router({ mergeParams: true });
const routeAuth = Router();
import { UserController } from "../../controller/user/user.controller";
import { UserRepositoryClass } from "../../repository/userRepository/UserRepository";
import { UserUsesCases } from "../../../aplication/user/user.usesCases";
import { jwtAuthenticate } from "../../../config/jwt_authentication";

const jwtAuthMiddleware = jwtAuthenticate.authenticate("jwt", {
  session: false,
});

/** Injeciones de dependencia*/
const UserRepository = new UserRepositoryClass();
const userUsescases = new UserUsesCases(UserRepository);
const userController = new UserController(userUsescases);

/** Rutas para la aplicaion */
route.get("/", userController.GetAll);
route.get("/profile/", userController.userProfile);
route.put("/edit/:id", userController.updateUser);
route.use("/register/", userController.insertUser);

/** Auth Routes */
routeAuth.post("/login/", userController.auth);
routeAuth.post("/token/verify/", userController.validateToken);

/** export properties */
export { route, routeAuth };
