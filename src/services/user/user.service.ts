import { db } from "../../db";
import { UserInterface } from "../../types/user.interface";
import { Prisma } from "@prisma/client";

interface responseInterface {
  status: number;
  message: any;
}

const registerUser = async <T extends responseInterface>(
  user: UserInterface
): Promise<T> => {
  const {
    apellido,
    email,
    fechanacimiento,
    identificacion,
    name,
    nombre,
    password,
    password_confirmation,
    perfil_id,
    roles,
    sexo_id,
    tipoidentificacion_id,
  } = user;

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
    } as T;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(e);
      return {
        status: 400,
        message: e.message,
      } as T;
    } else {
      return {
        status: 400,
        message: "Unknow Error",
      } as T;
    }
  }
};

const GetAllUsers = async () => {
  try {
    return await db.users.findMany();
  } catch (error) {
    console.log(error);
  }
};

export { GetAllUsers, registerUser };
