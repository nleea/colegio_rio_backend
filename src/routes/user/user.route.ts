import { Router } from "express";
import { getUser, insertUser } from "../../controller/user/user.controller";

const route = Router();

route.get("/users/", getUser);
route.post("/users/register/", insertUser);

export { route };
