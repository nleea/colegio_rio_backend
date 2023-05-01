import { MateriaEntity, MateriaCreateEntity, MateriaUpdateEntity } from "./materias.entity";
export declare class MateriaValue implements MateriaEntity {
    nombre: string;
    codigo: string;
    grado_id: number;
    sede_id: number;
    area_id: number;
    director_id: number;
    estado_id: number;
    constructor({ nombre, codigo, grado_id, sede_id, director_id, estado_id, area_id }: MateriaEntity);
}
export declare class MateriaCreateValue implements MateriaCreateEntity {
    nombre: string;
    codigo: string;
    grado_id: number;
    sede_id: number;
    estado_id: number;
    director_id: number;
    area_id: number;
    cofuncionariomaterias?: any[];
    constructor({ nombre, codigo, grado_id, sede_id, director_id, estado_id, area_id, cofuncionariomaterias }: MateriaCreateEntity);
}
export declare class MateriaUpdatedValue implements MateriaUpdateEntity {
    nombre: string;
    codigo: string;
    grado_id: number;
    sede_id: number;
    director_id: number;
    estado_id: number;
    area_id: number;
    cofuncionariomaterias_create?: any[];
    cofuncionariomaterias_delete?: any[];
    constructor({ nombre, codigo, grado_id, sede_id, director_id, estado_id, area_id, cofuncionariomaterias_create, cofuncionariomaterias_delete }: MateriaUpdateEntity);
}
//# sourceMappingURL=materias.value.d.ts.map