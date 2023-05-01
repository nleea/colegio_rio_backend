import { ComunicacionesRepository } from "../../../../domain/Comunicaciones/comunicaciones/comunicaciones.repository";
import { ComunicacionCreateEntity, ComunicacionUpdateEntity } from "../../../../domain/Comunicaciones/comunicaciones/comunicaciones.entity";
import { ResponseInterfaces, ErrorsInterfaces } from "../../../../types/response.interfaces";
export declare class ComunicacionRepositoryClass implements ComunicacionesRepository {
    #private;
    constructor();
    findAllComunicaciones(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    createComunicacionesP(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    storeComunicaciones(body: ComunicacionCreateEntity): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    showComunicacion(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    showComunicacionEdit(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    updatedComunicacion(body: ComunicacionUpdateEntity, id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    deleteComunicacion(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
}
//# sourceMappingURL=comunicacionesRepository.d.ts.map