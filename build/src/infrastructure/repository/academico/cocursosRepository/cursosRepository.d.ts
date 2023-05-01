import { CursosRepository } from "../../../../domain/Academico/cocursos/cursos.repository";
import { CursoEntity } from "../../../../domain/Academico/cocursos/cursos.entity";
import { ResponseInterfaces, ErrorsInterfaces } from "../../../../types/response.interfaces";
export declare class CursoRepositoryClass implements CursosRepository {
    #private;
    constructor();
    findAllCursos(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    createCursosP(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    storeCursos(body: CursoEntity): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    showCurso(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    showCursoEdit(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    updatedCurso(body: CursoEntity, id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
    deleteCurso(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
}
//# sourceMappingURL=cursosRepository.d.ts.map