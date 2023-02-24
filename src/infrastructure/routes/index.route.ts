import { Router } from "express";
import { route as routeUsers, routeAuth } from "./user/user.route";
import { route as routeRoles } from "./role/role.route";
import { route as routeModules } from "./modules/modules.router";
import { jwtAuthenticate } from "../../config/jwt_authentication";

const indexRoute = Router();
const jwtAuthMiddleware = jwtAuthenticate.authenticate("jwt", {
  session: false,
});

indexRoute.use("/user/", jwtAuthMiddleware, routeUsers);
indexRoute.use("/roles/", jwtAuthMiddleware, routeRoles);
indexRoute.use("/modulos/", jwtAuthMiddleware, routeModules);
indexRoute.use("/auth/", routeAuth);
export { indexRoute };
