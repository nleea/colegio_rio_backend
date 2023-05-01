import { ComunicacionCreateEntity, ComunicacionUpdateEntity } from "../../../domain/Comunicaciones/comunicaciones/comunicaciones.entity";
import { ComunicacionesRepository } from "../../../domain/Comunicaciones/comunicaciones/comunicaciones.repository";
export declare class ComunicacionesUsesCases {
    private readonly comunicacionesRepository;
    constructor(comunicacionesRepository: ComunicacionesRepository);
    listComunicaciones(): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    createComunicacionesP(): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    createComunicaciones(): Promise<void>;
    storeComunicaciones(body: ComunicacionCreateEntity): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    showComunicacione(id: number): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    showComunicacionEdit(id: number): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    updatedComunicacion(body: ComunicacionUpdateEntity, id: number): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    deleteComunicacion(id: number): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
}
//# sourceMappingURL=comunicaciones.usesCases.d.ts.map