import { faker } from "@faker-js/faker";
import { UserRepositoryClass } from "../../../infrastructure/repository/userRepository/UserRepository";
import { UserCreateEntity } from "@/domain/user/user.entity";

const users: any = [];

interface ExtraFields {
  fechaingreso: string;
  fechasalida: string;
}

export function CreateUserEstudiante(): Partial<UserCreateEntity> &
  ExtraFields {
  return {
    apellido: faker.random.words(1),
    email: faker.internet.email(),
    fechanacimiento: faker.date.birthdate().toString(),
    identificacion: faker.datatype.uuid(),
    name: faker.internet.userName(),
    tipoidentificacion_id: 1,
    telefonomovil: faker.random.numeric(10),
    roles: "Estudiante",
    fechaingreso: faker.date.recent().toString(),
    tarjetaprofesional: "ss",
    fechasalida: faker.date.soon().toString(),
  };
}

const a = new UserRepositoryClass();

describe("findUnique() tests", () => {
  Array.from({ length: 10 }).forEach(() => {
    it("should return true if register is create", async () => {
      const actual = await a.registerUser(CreateUserEstudiante() as any, 1);
      expect(actual.ok).toBe(true);
    });
  });
});
