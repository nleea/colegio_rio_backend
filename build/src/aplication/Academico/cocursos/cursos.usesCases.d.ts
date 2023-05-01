import { CursoCreateEntity, CursoUpdateEntity } from "../../../domain/Academico/cocursos/cursos.entity";
import { CursosRepository } from "../../../domain/Academico/cocursos/cursos.repository";
export declare class CursosUsesCases {
    private readonly cursosRepository;
    constructor(cursosRepository: CursosRepository);
    listCursos(): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    createCursosP(): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    createCursos(): Promise<void>;
    storeCursos(body: CursoCreateEntity): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    showCurso(id: number): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    showCursoEdit(id: number): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    updatedCurso(body: CursoUpdateEntity, id: number): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
    deleteCurso(id: number): Promise<import("../../../types/response.interfaces").ResponseInterfaces<any> | import("../../../types/response.interfaces").ErrorsInterfaces<any>>;
}
//# sourceMappingURL=cursos.usesCases.d.ts.map