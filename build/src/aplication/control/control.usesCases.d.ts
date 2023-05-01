import { ControlRepository } from "@/domain/control/control.repository";
import { Ibody } from "@/types/control.interface";
export declare class ControlUsesCases {
    private readonly controlRepository;
    constructor(controlRepository: ControlRepository);
    asistencia(body: Ibody, param?: any): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
    asistenciaUsuario(id: number): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
    asistenciaUsuarioQuery(ids: number[]): Promise<import("../../types/response.interfaces").ResponseInterfaces<any> | import("../../types/response.interfaces").ErrorsInterfaces<any>>;
}
//# sourceMappingURL=control.usesCases.d.ts.map