import { UserCreateEntity } from "@/domain/user/user.entity";
interface ExtraFields {
    fechaingreso: string;
    fechasalida: string;
}
export declare function CreateUserEstudiante(): Partial<UserCreateEntity> & ExtraFields;
export {};
//# sourceMappingURL=UserRepository.test.d.ts.map