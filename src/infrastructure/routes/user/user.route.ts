import { Router } from "express";

const route = Router({ mergeParams: true });
const routeAuth = Router();
import { UserController } from "../../controller/user/user.controller";
import { UserRepositoryClass } from "../../repository/userRepository/UserRepository";
import { UserUsesCases } from "../../../aplication/user/user.usesCases";
import { upload } from "../../../helpers/upload";
import { UploadFileMiddleware } from "../../../middleware/uploadMiddleware";

/** Injeciones de dependencia*/
const UserRepository = new UserRepositoryClass();
const userUsescases = new UserUsesCases(UserRepository);
const userController = new UserController(userUsescases);

/** Rutas para la aplicaion */
route.post("/", userController.GetAll);
route.get("/profile/", userController.userProfile);
route.put("/edit/:id", userController.updateUser);
route.use(
  "/register/",
  [upload.single("avatar"), UploadFileMiddleware],
  userController.insertUser
);

/** Auth Routes */
routeAuth.post("/login/", userController.auth);
routeAuth.post("/token/verify/", userController.validateToken);

/** export properties */
export { route, routeAuth };
