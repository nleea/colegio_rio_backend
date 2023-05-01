import { AreaCreateEntity, AreaUpdateEntity } from "../../../domain/Academico/coareas/areas.entity";
import { AreasRepository } from "../../../domain/Academico/coareas/areas.repository";
export declare class AreasUsesCases {
    private readonly areasRepository;
    constructor(areasRepository: AreasRepository);
    listAreas(): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    createAreasP(): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    createAreas(): Promise<void>;
    storeAreas(body: AreaCreateEntity): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    showArea(id: number): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    showAreaEdit(id: number): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    updatedArea(body: AreaUpdateEntity, id: number): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    deleteArea(id: number): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
}
//# sourceMappingURL=areas.usesCases.d.ts.map