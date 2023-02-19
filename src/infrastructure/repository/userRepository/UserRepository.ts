import { UserRepository } from "../../../domain/user/user.repository";
import { UserCreateEntity } from "../../../domain/user/user.entity";
import { db } from "../../models/db";
import { Prisma } from "@prisma/client";

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
              password,
              username: name,
              perfil_id,
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
}
