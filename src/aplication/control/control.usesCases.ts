import { ControlRepository } from "../../domain/control/control.repository";
import { Ibody } from "@/types/control.interface";
export class ControlUsesCases {
  constructor(private readonly controlRepository: ControlRepository) {}

  public async asistencia(body: Ibody, param?: any) {
    const resp = await this.controlRepository.asistencia(body, param);
    return resp;
  }

  public async asistenciaUsuario(id: number) {
    const resp = await this.controlRepository.userAsistencia(id);
    return resp;
  }
}
