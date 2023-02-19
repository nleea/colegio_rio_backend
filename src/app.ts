import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import { route } from "./routes/user/user.route";
import { routeRole } from "./routes/role/role.route";

export class App {
  app: Application;
  port: number | string;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(morgan("dev"));
  }

  routes() {
    this.app.use("/api/", route);
    this.app.use("/api/", routeRole);
  }

  server() {
    this.app.listen(this.port, () => {
      console.log(`Server on port: ${this.port}`);
    });
  }
}
