import {
  AreaCreateEntity,
  AreaEntity,
  AreaUpdateEntity,
} from "../../../domain/Academico/coareas/areas.entity";
import { AreasRepository } from "../../../domain/Academico/coareas/areas.repository";
import { AreaCreateValue, AreaValue, AreaUpdatedValue } from "../../../domain/Academico/coareas/areas.value";

export class AreasUsesCases {
  constructor(private readonly areasRepository: AreasRepository) {}

  public async listAreas() {
    const resp = await this.areasRepository.findAllAreas();
    return resp;
  }
  public async createAreasP() {
    const resp = await this.areasRepository.createAreasP();
    return resp;
  }

  public async createAreas(){
    const resp = await this.areasRepository.createAreasP()

  }
  public async storeAreas(body: AreaCreateEntity){
    const AreaValue = new AreaCreateValue({ ...body });
    const resp = this.areasRepository.storeAreas(AreaValue);
    return resp;
  }


  public showArea(id:number){
    const resp = this.areasRepository.showArea(id)
    return resp;
  }
  public showAreaEdit(id:number){
    const resp = this.areasRepository.showAreaEdit(id)
    return resp;
  }
  public updatedArea(body: AreaUpdateEntity, id:number){
    const AreaValue = new AreaUpdatedValue({ ...body });
    const resp = this.areasRepository.updatedArea(AreaValue, id);
    return resp;
  }
  public deleteArea(id:number){
    const resp = this.areasRepository.deleteArea(id)
    return resp;
  }


  
}
