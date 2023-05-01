import { MateriaCreateEntity, MateriaUpdateEntity } from "../../../domain/Academico/comaterias/materias.entity";
import { MateriasRepository } from "../../../domain/Academico/comaterias/materias.repository";
export declare class MateriasUsesCases {
    private readonly materiasRepository;
    constructor(materiasRepository: MateriasRepository);
    listMaterias(): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    createMateriasP(): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    createMaterias(): Promise<void>;
    storeMaterias(body: MateriaCreateEntity): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    showMateria(id: number): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    showMateriaEdit(id: number): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    updatedMateria(body: MateriaUpdateEntity, id: number): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    deleteMateria(id: number): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
}
//# sourceMappingURL=materias.usesCases.d.ts.map