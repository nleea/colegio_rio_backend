import {
  CursoCreateEntity,
  CursoEntity,
  CursoUpdateEntity,
} from "../../../domain/Academico/cocursos/cursos.entity";
import { CursosRepository } from "../../../domain/Academico/cocursos/cursos.repository";
import { CursoCreateValue, CursoValue,CursoUpdatedValue } from "../../../domain/Academico/cocursos/cursos.value";

export class CursosUsesCases {
  constructor(private readonly cursosRepository: CursosRepository) {}

  public async listCursos() {
    const resp = await this.cursosRepository.findAllCursos();
    return resp;
  }

  public async createCursos(){
    const resp = await this.cursosRepository.createCursosP()

  }
  public async storeCursos(body: CursoCreateEntity){
    const CursoValue = new CursoCreateValue({ ...body });
    const resp = this.cursosRepository.storeCursos(CursoValue);
    return resp;
  }

  public showCurso(id:number){
    const resp = this.cursosRepository.showCurso(id)
    return resp;
  }
  public updatedCurso(body: CursoUpdateEntity, id:number){
    const CursoValue = new CursoUpdatedValue({ ...body });
    const resp = this.cursosRepository.updatedCurso(CursoValue, id);
    return resp;
  }
  public deleteCurso(id:number){
    const resp = this.cursosRepository.deleteCurso(id)
    return resp;
  }


  
}
