"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRoute = void 0;
const express_1 = require("express");
const user_route_1 = require("./user/user.route");
const role_route_1 = require("./role/role.route");
const modules_router_1 = require("./modules/modules.router");
const cocurso_route_1 = require("./academico/cocursos/cocurso.route");
const coarea_route_1 = require("./academico/coareas/coarea.route");
const comunicacion_route_1 = require("./comunicaciones/comunicaciones/comunicacion.route");
const comateria_route_1 = require("./academico/comateria/comateria.route");
const jwt_authentication_1 = require("../../config/jwt_authentication");
const control_routes_1 = require("./control/control.routes");
const indexRoute = (0, express_1.Router)();
exports.indexRoute = indexRoute;
const jwtAuthMiddleware = jwt_authentication_1.jwtAuthenticate.authenticate("jwt", {
    session: false,
});
indexRoute.use("/user/", user_route_1.route);
indexRoute.use("/roles/", jwtAuthMiddleware, role_route_1.route);
indexRoute.use("/modulos/", jwtAuthMiddleware, modules_router_1.route);
indexRoute.use("/cursos/", jwtAuthMiddleware, cocurso_route_1.route);
indexRoute.use("/areas/", jwtAuthMiddleware, coarea_route_1.route);
indexRoute.use("/comunicaciones/", jwtAuthMiddleware, comunicacion_route_1.route);
indexRoute.use("/materias/", jwtAuthMiddleware, comateria_route_1.route);
indexRoute.use("/control/", control_routes_1.route);
indexRoute.use("/auth/", user_route_1.routeAuth);
//# sourceMappingURL=index.route.js.map