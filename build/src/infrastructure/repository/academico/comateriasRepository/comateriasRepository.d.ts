import { MateriasRepository } from "../../../../domain/Academico/comaterias/materias.repository";
import { MateriaCreateEntity, MateriaUpdateEntity } from "../../../../domain/Academico/comaterias/materias.entity";
import { ResponseInterfaces, ErrorsInterfaces } from "../../../../types/response.interfaces";
export declare class MateriaRepositoryClass implements MateriasRepository {
    #private;
    constructor();
    findAllMaterias(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    createMateriasP(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    storeMaterias(body: MateriaCreateEntity): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    showMateria(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    showMateriaEdit(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    updatedMateria(body: MateriaUpdateEntity, id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    deleteMateria(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
}
//# sourceMappingURL=comateriasRepository.d.ts.map