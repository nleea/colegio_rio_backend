import { Router } from "express";
import { route as routeUsers } from "./user/user.route";
import { route as routeRoles } from "./role/role.route";

const indexRoute = Router();

indexRoute.use("/users/", routeUsers);
indexRoute.use("/roles/", routeRoles);
export { indexRoute };
