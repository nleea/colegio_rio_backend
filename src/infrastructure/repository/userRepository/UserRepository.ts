import { UserRepository } from "../../../domain/user/user.repository";
import {
  UserCreateEntity,
  UserEntity,
  UserUpdateEntity,
} from "../../../domain/user/user.entity";
import { db } from "../../models/db";
import { Prisma } from "@prisma/client";
import { hashPin, comparePin } from "../../../helpers/bcryp";
import { sign } from "jsonwebtoken";
import {
  ResponseInterfaces,
  ErrorsInterfaces,
} from "../../../types/response.interfaces";
import { verify } from "jsonwebtoken";

export class UserRepositoryClass implements UserRepository {
  #db: typeof db;
  constructor() {
    this.#db = db;
  }
  async findAllUser(): Promise<
    ResponseInterfaces<UserEntity[]> | ErrorsInterfaces<unknown>
  > {
    try {
      const resp = await this.#db.users.findMany({
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
    } catch (error) {
      return {
        data: error,
        ok: false,
        status: 400,
      };
    }
  }

  async registerUser(
    body: UserCreateEntity
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    const {
      apellido,
      email,
      fechanacimiento,
      identificacion,
      name,
      nombre,
      password,
      role_id,
      sexo_id,
      tipoidentificacion_id,
    } = body;

    try {
      await this.#db.personas.create({
        data: {
          apellido,
          email,
          fechanacimiento: new Date(fechanacimiento),
          identificacion,
          nombre,
          sexo_id,
          tipoidentificacion_id,
          telefonomovil: "ss",
          users: {
            create: {
              username: name,
              password: hashPin(password).encrypted,
              role_id: role_id,
            },
          },
        },
      });

      return {
        status: 200,
        data: "Ok",
        ok: true,
      };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        console.log(e);
        return {
          status: 400,
          data: e.message,
          ok: false,
        };
      } else {
        return {
          status: 400,
          data: "Unknow Error",
          ok: false,
        };
      }
    }
  }

  async login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<ResponseInterfaces<any> | ErrorsInterfaces<string | any>> {
    try {
      const user = await this.#db.users.findUnique({
        where: { username: username },
        include: {
          roles: {
            select: {
              modulos_has_role: {
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

      if (!comparePin(String(password), user.password)) {
        return {
          ok: false,
          data: "Password do not match",
          status: 400,
        };
      }

      const token = sign(
        {
          email: user.email,
          username: user.username,
        },
        process.env.SECRET_OR_KEY!,
        { expiresIn: "1d" }
      );

      return {
        data: {
          token,
          user: user.id,
          resources: user.roles?.modulos_has_role.map((p) => p.modulos),
          IsAuth: true,
        },
        ok: true,
        status: 200,
      };
    } catch (error) {
      return {
        ok: false,
        data: error,
        status: 400,
      };
    }
  }

  async userProfile(
    id: number
  ): Promise<ResponseInterfaces<UserEntity> | ErrorsInterfaces<any>> {
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
    } catch (error) {
      return {
        data: error,
        ok: false,
        status: 400,
      };
    }
  }

  async updatedUser(
    id: number,
    data: Omit<Partial<UserUpdateEntity>, "roles">
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    try {
      await this.#db.users.update({
        where: { id: id },
        data: {
          username: data.name,
          personas: {
            update: {
              fechanacimiento: new Date(data.fechanacimiento!),
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
    } catch (error) {
      return {
        data: error,
        ok: false,
        status: 400,
      };
    }
  }

  async validateToken(
    token: string
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    try {
      verify(token, process.env.SECRET_OR_KEY!);

      return {
        data: "Valid Token",
        ok: true,
        status: 200,
      };
    } catch (error) {
      return {
        data: "Invalid Token",
        ok: false,
        status: 200,
      };
    }
  }
}
