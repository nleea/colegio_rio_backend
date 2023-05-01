import { CursoEntity, CursoCreateEntity, CursoUpdateEntity } from "./cursos.entity";
export declare class CursoValue implements CursoEntity {
    nombre: string;
    codigo: string;
    grado_id: number;
    sede_id: number;
    director_id: number;
    estado_id: number;
    constructor({ nombre, codigo, grado_id, sede_id, director_id, estado_id }: CursoEntity);
}
export declare class CursoCreateValue implements CursoCreateEntity {
    nombre: string;
    codigo: string;
    grado_id: number;
    sede_id: number;
    estado_id: number;
    director_id: number;
    constructor({ nombre, codigo, grado_id, sede_id, director_id, estado_id, }: CursoCreateEntity);
}
export declare class CursoUpdatedValue implements CursoUpdateEntity {
    nombre: string;
    codigo: string;
    grado_id: number;
    sede_id: number;
    director_id: number;
    estado_id: number;
    constructor({ nombre, codigo, grado_id, sede_id, director_id, estado_id, }: CursoUpdateEntity);
}
//# sourceMappingURL=cursos.value.d.ts.map