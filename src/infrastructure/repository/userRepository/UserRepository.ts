import { UserRepository } from "../../../domain/user/user.repository";
import { UserCreateEntity, UserEntity } from "../../../domain/user/user.entity";
import { db } from "../../models/db";
import { Prisma } from "@prisma/client";
import { hashPin, comparePin } from "../../../helpers/bcryp";
import { sign } from "jsonwebtoken";
import {
  ResponseInterfaces,
  ErrorsInterfaces,
} from "../../../types/response.interfaces";

export class UserRepositoryClass implements UserRepository {
  async findAllUser(): Promise<
    ResponseInterfaces<UserEntity[]> | ErrorsInterfaces<unknown>
  > {
    try {
      const resp = await db.users.findMany();
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
      perfil_id,
      sexo_id,
      tipoidentificacion_id,
    } = body;

    try {
      await db.personas.create({
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
              password: hashPin(password).encrypted,
              username: name,
              perfil_id,
              email,
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
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<ResponseInterfaces<any> | ErrorsInterfaces<string | any>> {
    try {
      const user = await db.users.findUnique({ where: { email: email } });

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
          data: "Password Do not match",
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
        data: { token, client: user.id, IsAuth: true },
        ok: true,
        status: 200,
      };
    } catch (error) {
      console.log(error);
      return {
        ok: false,
        data: "sss",
        status: 400,
      };
    }
  }

  async userProfile(
    id: number
  ): Promise<ResponseInterfaces<UserEntity> | ErrorsInterfaces<any>> {
    try {
      const user = await db.users.findUnique({ where: { id: Number(id) } });
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
}
