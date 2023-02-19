import { Router } from "express";
import { getRole} from "../../controller/role/role.controller";

const routeRole = Router();

routeRole.get("/roles/", getRole);

export { routeRole };