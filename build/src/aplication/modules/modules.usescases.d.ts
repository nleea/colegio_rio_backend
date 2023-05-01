import { ModulesEntity } from "../../domain/modules/modules.entity";
import { ModulesRepository } from "../../domain/modules/modules.repository";
export declare class ModulesUsesCases {
    private readonly moduleRepository;
    constructor(moduleRepository: ModulesRepository);
    listModules(): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
    createModules(id: number, body: ModulesEntity[]): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
    deleteModules(rolId: number, rolName: string, body: any[]): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
    createModulosHasRoles(rolId: number, body: any[]): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
    listModulesHasRoles(rolesName: string, inModule: boolean): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
    listModulesWithoutRoles(rolId: number): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
}
//# sourceMappingURL=modules.usescases.d.ts.map