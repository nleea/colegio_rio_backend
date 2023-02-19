import { Router } from "express";
import { route as routeUsers, routeAuth } from "./user/user.route";
import { route as routeRoles } from "./role/role.route";
import { jwtAuthenticate } from "../../config/jwt_authentication";

const indexRoute = Router();
const jwtAuthMiddleware = jwtAuthenticate.authenticate("jwt", {
  session: false,
});

indexRoute.use("/users/", jwtAuthMiddleware, routeUsers);
indexRoute.use("/roles/", jwtAuthMiddleware, routeRoles);
indexRoute.use("/auth/", routeAuth);
export { indexRoute };
