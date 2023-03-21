import {
  ComunicacionCreateEntity,
  ComunicacionEntity,
  ComunicacionUpdateEntity,
} from "../../../domain/Comunicaciones/comunicaciones/comunicaciones.entity"
import { ComunicacionesRepository } from "../../../domain/Comunicaciones/comunicaciones/comunicaciones.repository";
import { ComunicacionCreateValue, ComunicacionValue, ComunicacionUpdatedValue } from "../../../domain/Comunicaciones/comunicaciones/comunicaciones.value";

export class ComunicacionesUsesCases {
  constructor(private readonly comunicacionesRepository: ComunicacionesRepository) {}

  public async listComunicaciones() {
    const resp = await this.comunicacionesRepository.findAllComunicaciones();
    return resp;
  }
  public async createComunicacionesP() {
    const resp = await this.comunicacionesRepository.createComunicacionesP();
    return resp;
  }

  public async createComunicaciones(){
    const resp = await this.comunicacionesRepository.createComunicacionesP()

  }
  public async storeComunicaciones(body: ComunicacionCreateEntity){
    const ComunicacioneValue = new ComunicacionCreateValue({ ...body });
    // console.log('datos2')
    // console.log(ComunicacioneValue)
    const resp = this.comunicacionesRepository.storeComunicaciones(ComunicacioneValue);
    return resp;
  }


  public showComunicacione(id:number){
    const resp = this.comunicacionesRepository.showComunicacion(id)
    return resp;
  }
  public showComunicacionEdit(id:number){
    const resp = this.comunicacionesRepository.showComunicacionEdit(id)
    return resp;
  }
  public updatedComunicacion(body: ComunicacionUpdateEntity, id:number){
    const ComunicacioneValue = new ComunicacionUpdatedValue({ ...body });
    const resp = this.comunicacionesRepository.updatedComunicacion(ComunicacioneValue, id);
    return resp;
  }
  public deleteComunicacion(id:number){
    const resp = this.comunicacionesRepository.deleteComunicacion(id)
    return resp;
  }


  
}
