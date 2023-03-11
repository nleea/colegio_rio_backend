import {
  MateriaCreateEntity,
  MateriaEntity,
  MateriaUpdateEntity,
} from "../../../domain/Academico/comaterias/materias.entity";
import { MateriasRepository } from "../../../domain/Academico/comaterias/materias.repository";
import { MateriaCreateValue, MateriaValue,MateriaUpdatedValue } from "../../../domain/Academico/comaterias/materias.value";

export class MateriasUsesCases {
  constructor(private readonly materiasRepository: MateriasRepository) {}

  public async listMaterias() {
    const resp = await this.materiasRepository.findAllMaterias();
    return resp;
  }
  public async createMateriasP() {
    const resp = await this.materiasRepository.createMateriasP();
    return resp;
  }

  public async createMaterias(){
    const resp = await this.materiasRepository.createMateriasP()

  }
  public async storeMaterias(body: MateriaCreateEntity){
    const MateriaValue = new MateriaCreateValue({ ...body });
    const resp = this.materiasRepository.storeMaterias(MateriaValue);
    return resp;
  }

  

  public showMateria(id:number){
    const resp = this.materiasRepository.showMateria(id)
    return resp;
  }
  public showMateriaEdit(id:number){
    const resp = this.materiasRepository.showMateriaEdit(id)
    return resp;
  }
  public updatedMateria(body: MateriaUpdateEntity, id:number){
    const MateriaValue = new MateriaUpdatedValue({ ...body });
    const resp = this.materiasRepository.updatedMateria(MateriaValue, id);
    return resp;
  }
  public deleteMateria(id:number){
    const resp = this.materiasRepository.deleteMateria(id)
    return resp;
  }
  
}
