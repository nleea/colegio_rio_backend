import { ControlRepository } from "../../domain/control/control.repository";

export class ControlUsesCases {
  constructor(private readonly controlRepository: ControlRepository) {}

  public async asistencia(identificacion: string) {
    const resp = await this.controlRepository.asistencia(identificacion);
    return resp;
  }
}
