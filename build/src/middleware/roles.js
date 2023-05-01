"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consulta = exports.CreateRoles = exports.VerRoles = void 0;
const db_1 = require("../../src/infrastructure/models/db");
const VerRoles = async (req, res, next) => {
    const permissionVer = "ver-rol";
    try {
        if (!verifytoken(req))
            return res.status(403).json({ message: "Not token provided" });
        const { id } = req.user;
        const tienePermiso = await (0, exports.consulta)(id, permissionVer);
        if (!tienePermiso)
            return res.status(403).json({ message: "No tienes permisos!!" });
        next();
    }
    catch (error) {
        res.status(404).json({ message: "Unauthorized" });
    }
};
exports.VerRoles = VerRoles;
const CreateRoles = async (req, res, next) => {
    const permissionVer = "crear-rol";
    try {
        const { id } = req.user;
        const tienePermiso = await (0, exports.consulta)(id, permissionVer);
        if (!tienePermiso)
            return res.status(403).json({ message: "No tienes permisos!!" });
        next();
    }
    catch (error) {
        res.status(404).json({ message: "Unauthorized" });
    }
};
exports.CreateRoles = CreateRoles;
/*
This code finds a unique user based on their ID, then checks to see if they have a given permission.
If the user is found and has the specified permission, tienePermiso returns true. Otherwise, it returns false.
*/
const consulta = async (id, permissionVer) => {
    const resp = await db_1.db.users.findUnique({
        where: {
            id: id,
        },
        include: {
            roles: {
                select: {
                    role_has_permissions: {
                        select: { permissions: { select: { name: true } } },
                    },
                },
            },
        },
    });
    if (!resp)
        return false;
    const permisos = resp?.roles?.role_has_permissions;
    let tienePermiso = Boolean(permisos?.some((role) => role.permissions.name === permissionVer));
    return tienePermiso || false;
};
exports.consulta = consulta;
const verifytoken = (req) => {
    const token = req.headers.authorization;
    if (!token)
        return false;
    return true;
};
//# sourceMappingURL=roles.js.map