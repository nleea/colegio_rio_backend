"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryClass = void 0;
const db_1 = require("../../models/db");
const client_1 = require("@prisma/client");
const bcryp_1 = require("../../../helpers/bcryp");
const jsonwebtoken_1 = require("jsonwebtoken");
const jsonwebtoken_2 = require("jsonwebtoken");
class UserRepositoryClass {
    #db;
    constructor() {
        this.#db = db_1.db;
    }
    async findAllUser(type, is) {
        try {
            const query = is
                ? { is: { name: { contains: type } } }
                : { isNot: { name: { contains: type } } };
            const resp = await this.#db.users.findMany({
                where: { roles: { ...query } },
                select: {
                    email: true,
                    telefonomovil: true,
                    username: true,
                    estado_id: true,
                    id: true,
                    personas: {
                        select: {
                            apellido: true,
                            nombre: true,
                            telefono: true,
                            fechanacimiento: true,
                        },
                    },
                    roles: {
                        select: { name: true },
                    },
                },
            });
            return {
                data: resp,
                ok: true,
                status: 200,
            };
        }
        catch (error) {
            return {
                data: error,
                ok: false,
                status: 400,
            };
        }
    }
    async registerUser(body, userid, avatar) {
        const { apellido, email, fechanacimiento, identificacion, name, tipoidentificacion_id, telefonomovil, roles, fechaingreso, tarjetaprofesional, fechasalida, } = body;
        const restData = {
            Cofuncionarios: {
                cofuncionarios: {
                    create: {
                        tarjetaprofesional,
                        fechaingreso,
                        estado_id: 1,
                        created_by: userid,
                    },
                },
            },
            Estudiante: {
                estudiantes: {
                    create: {
                        fechasalida: new Date(fechasalida),
                        fechaingreso: new Date(fechaingreso),
                        created_by: userid,
                    },
                },
            },
        };
        try {
            await db_1.db.personas.create({
                data: {
                    apellido,
                    email,
                    fechanacimiento: new Date(fechanacimiento),
                    identificacion,
                    nombre: name,
                    sexo_id: 1,
                    tipoidentificacion_id,
                    telefonomovil,
                    foto: avatar,
                    users: {
                        create: {
                            username: `${name.concat(...identificacion.substring(1, 5))}`,
                            password: (0, bcryp_1.hashPin)(identificacion).encrypted,
                            roles: { connect: { name: roles } },
                        }
                    },
                    ...restData[roles],
                },
            });
            return {
                status: 200,
                data: "Ok",
                ok: true,
            };
        }
        catch (e) {
            console.log(e);
            if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                return {
                    status: 400,
                    data: e.message,
                    ok: false,
                };
            }
            else {
                return {
                    status: 400,
                    data: "Unknow Error",
                    ok: false,
                };
            }
        }
    }
    async login({ username, password, }) {
        try {
            const user = await this.#db.users.findUnique({
                where: { username: username },
                select: {
                    password: true,
                    email: true,
                    id: true,
                    telefonomovil: true,
                    username: true,
                    roles: {
                        select: {
                            modulos_has_role: {
                                orderBy: { id: "asc" },
                                select: {
                                    modulos: {
                                        select: {
                                            id: true,
                                            icon: true,
                                            path: true,
                                            name: true,
                                            id_padre: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            });
            if (!user) {
                return {
                    ok: false,
                    data: "Invalid User",
                    status: 400,
                };
            }
            if (!(0, bcryp_1.comparePin)(String(password), user.password)) {
                return {
                    ok: false,
                    data: "Password do not match",
                    status: 400,
                };
            }
            const token = (0, jsonwebtoken_1.sign)({
                email: user.email,
                username: user.username,
            }, process.env.SECRET_OR_KEY, { expiresIn: "1d" });
            const TokenRefresh = (0, jsonwebtoken_1.sign)({ email: user.email, username: user.username }, process.env.SECRET_OR_KEY, { expiresIn: "1d" });
            return {
                data: {
                    token,
                    tokenRefresh: TokenRefresh,
                    user: { name: user.username, id: user.id },
                    resources: user.roles?.modulos_has_role.map((p) => p.modulos),
                    IsAuth: true,
                },
                ok: true,
                status: 200,
            };
        }
        catch (error) {
            return {
                ok: false,
                data: error,
                status: 400,
            };
        }
    }
    async userProfile(id) {
        try {
            const user = await this.#db.users.findUnique({
                where: { id: Number(id) },
                include: { personas: true },
            });
            return {
                data: user,
                ok: true,
                status: 200,
            };
        }
        catch (error) {
            return {
                data: error,
                ok: false,
                status: 400,
            };
        }
    }
    async updatedUser(id, data) {
        try {
            await this.#db.users.update({
                where: { id: id },
                data: {
                    username: data.name,
                    personas: {
                        update: {
                            fechanacimiento: new Date(data.fechanacimiento),
                            nombre: data.nombre,
                            apellido: data.apellido,
                            tipoidentificacion_id: data.tipoidentificacion_id,
                            sexo_id: data.sexo_id,
                        },
                    },
                },
            });
            return {
                data: "Ok",
                ok: true,
                status: 200,
            };
        }
        catch (error) {
            return {
                data: error,
                ok: false,
                status: 400,
            };
        }
    }
    async validateToken(token, refreshToken) {
        try {
            (0, jsonwebtoken_2.verify)(token, process.env.SECRET_OR_KEY, { complete: true });
            return {
                data: "Valid Token",
                ok: true,
                status: 200,
            };
        }
        catch (error) {
            try {
                const success = (0, jsonwebtoken_2.verify)(refreshToken, process.env.SECRET_OR_KEY, {
                    complete: true,
                });
                if (success) {
                    const token = (0, jsonwebtoken_1.sign)({
                        email: success.payload.email,
                        username: success.payload.username,
                    }, process.env.SECRET_OR_KEY, { expiresIn: "30m" });
                    return {
                        data: { token, is: true },
                        ok: true,
                        status: 200,
                    };
                }
            }
            catch (error) {
                return {
                    data: "Invalid Token",
                    ok: false,
                    status: 400,
                };
            }
        }
        return {
            data: "Invalid Token",
            ok: false,
            status: 400,
        };
    }
}
exports.UserRepositoryClass = UserRepositoryClass;
//# sourceMappingURL=UserRepository.js.map