import { UserRepository } from "../../../domain/user/user.repository";
import { UserCreateEntity } from "../../../domain/user/user.entity";
import { db } from "../../models/db";
import { Prisma } from "@prisma/client";
import { hashPin, comparePin } from "../../../helpers/bcryp";
import { sign } from "jsonwebtoken";

export class UserRepositoryClass implements UserRepository {
  async findAllUser(): Promise<any[] | null | any> {
    try {
      return await db.users.findMany();
    } catch (error) {
      console.log(error);
    }
  }

  async registerUser(body: UserCreateEntity): Promise<any> {
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
        message: "Ok",
      };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        console.log(e);
        return {
          status: 400,
          message: e.message,
        };
      } else {
        return {
          status: 400,
          message: "Unknow Error",
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
  }): Promise<any> {
    try {
      const user = await db.users.findUnique({ where: { email: email } });

      if (!user) {
        return {
          ok: false,
          message: "Invalid User",
        };
      }

      if (!comparePin(String(password), user.password)) {
        return {
          ok: false,
          message: "Password Do not match",
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
      };
    } catch (error) {
      console.log(error);
      return {
        ok: false,
        message: "sss",
      };
    }
  }
}
