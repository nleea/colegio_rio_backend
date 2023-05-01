import { ComunicacionCreateEntity, ComunicacionUpdateEntity } from "./comunicaciones.entity";
import { ErrorsInterfaces, ResponseInterfaces } from "../../../types/response.interfaces";
export interface ComunicacionesRepository {
    findAllComunicaciones(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    createComunicacionesP(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    storeComunicaciones(body: ComunicacionCreateEntity): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    showComunicacion(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    updatedComunicacion(body: ComunicacionUpdateEntity, id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    showComunicacionEdit(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    deleteComunicacion(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
}
//# sourceMappingURL=comunicaciones.repository.d.ts.map