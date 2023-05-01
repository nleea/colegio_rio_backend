import { ModulesEntity } from "../../../domain/modules/modules.entity";
import { ModulesRepository } from "../../../domain/modules/modules.repository";
import { ErrorsInterfaces, ResponseInterfaces } from "../../../types/response.interfaces";
import { PrismaClient } from "@prisma/client";
export declare class ModulesRepositoryClass implements ModulesRepository {
    private db;
    constructor(db: PrismaClient);
    findAllRolesModules(ModulosName: string, inModule?: boolean): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>>;
    moduleWithoutRol(rolId: number): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>>;
    findAllModules(): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>>;
    createModules(rol: number, body: ModulesEntity[]): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>>;
    deleteModule(rolId: number, rolName: string, modulos: any[]): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>>;
    createModuleRol(rolId: number, modulos: any[]): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>>;
}
//# sourceMappingURL=modulesRepository.d.ts.map