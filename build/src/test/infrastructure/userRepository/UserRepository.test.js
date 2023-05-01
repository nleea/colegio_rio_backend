"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserEstudiante = void 0;
const faker_1 = require("@faker-js/faker");
const UserRepository_1 = require("../../../infrastructure/repository/userRepository/UserRepository");
const users = [];
function CreateUserEstudiante() {
    return {
        apellido: faker_1.faker.random.words(1),
        email: faker_1.faker.internet.email(),
        fechanacimiento: faker_1.faker.date.birthdate().toString(),
        identificacion: faker_1.faker.datatype.uuid(),
        name: faker_1.faker.internet.userName(),
        tipoidentificacion_id: 1,
        telefonomovil: faker_1.faker.random.numeric(10),
        roles: "Estudiante",
        fechaingreso: faker_1.faker.date.recent().toString(),
        tarjetaprofesional: "ss",
        fechasalida: faker_1.faker.date.soon().toString(),
    };
}
exports.CreateUserEstudiante = CreateUserEstudiante;
const a = new UserRepository_1.UserRepositoryClass();
describe("findUnique() tests", () => {
    Array.from({ length: 100 }).forEach(() => {
        it("should return true if register is create", async () => {
            const actual = await a.registerUser(CreateUserEstudiante(), 1);
            expect(actual.ok).toBe(true);
        });
    });
});
//# sourceMappingURL=UserRepository.test.js.map