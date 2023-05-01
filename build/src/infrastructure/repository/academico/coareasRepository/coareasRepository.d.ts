import { AreasRepository } from "../../../../domain/Academico/coareas/areas.repository";
import { AreaCreateEntity, AreaUpdateEntity } from "../../../../domain/Academico/coareas/areas.entity";
import { ResponseInterfaces, ErrorsInterfaces } from "../../../../types/response.interfaces";
export declare class AreaRepositoryClass implements AreasRepository {
    #private;
    constructor();
    findAllAreas(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    createAreasP(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    storeAreas(body: AreaCreateEntity): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    showArea(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    showAreaEdit(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    updatedArea(body: AreaUpdateEntity, id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    deleteArea(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
}
//# sourceMappingURL=coareasRepository.d.ts.map