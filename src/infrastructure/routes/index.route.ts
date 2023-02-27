import { Router } from "express";
import { route as routeUsers, routeAuth } from "./user/user.route";
import { route as routeRoles } from "./role/role.route";
import { route as routeModules } from "./modules/modules.router";
import { route as cocursoModules } from "./academico/cocursos/cocurso.route";
import { jwtAuthenticate } from "../../config/jwt_authentication";

const indexRoute = Router();
const jwtAuthMiddleware = jwtAuthenticate.authenticate("jwt", {
  session: false,
});

indexRoute.use("/user/", jwtAuthMiddleware, routeUsers);
indexRoute.use("/roles/", jwtAuthMiddleware, routeRoles);
indexRoute.use("/modulos/", jwtAuthMiddleware, routeModules);
indexRoute.use("/cursos/", jwtAuthMiddleware, cocursoModules);
indexRoute.use("/auth/", routeAuth);
export { indexRoute };
