import { Router } from "express";
import { route as routeUsers, routeAuth } from "./user/user.route";
import { route as routeRoles } from "./role/role.route";
import { route as routeModules } from "./modules/modules.router";
import { route as cocursoModules } from "./academico/cocursos/cocurso.route";
import { route as coareaModules } from "./academico/coareas/coarea.route";
import { route as comunicacionModules } from "./comunicaciones/comunicaciones/comunicacion.route";
import { route as comateriaModules } from "./academico/comateria/comateria.route";
import { jwtAuthenticate } from "../../config/jwt_authentication";
import { route as routeControl } from "./control/control.routes";

const indexRoute = Router();
const jwtAuthMiddleware = jwtAuthenticate.authenticate("jwt", {
  session: false,
});

indexRoute.use("/user/", jwtAuthMiddleware, routeUsers);
indexRoute.use("/roles/", jwtAuthMiddleware, routeRoles);
indexRoute.use("/modulos/", jwtAuthMiddleware, routeModules);
indexRoute.use("/cursos/", jwtAuthMiddleware, cocursoModules);
indexRoute.use("/areas/", jwtAuthMiddleware, coareaModules);
indexRoute.use("/comunicaciones/", jwtAuthMiddleware, comunicacionModules);
indexRoute.use("/materias/", jwtAuthMiddleware, comateriaModules);
indexRoute.use("/control/", routeControl);
indexRoute.use("/auth/", routeAuth);
export { indexRoute };
