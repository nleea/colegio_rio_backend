import { ControlRepository } from "../../domain/control/control.repository";
import { Ibody } from "@/types/control.interface";
export class ControlUsesCases {
  constructor(private readonly controlRepository: ControlRepository) {}

  public async asistencia(body: Ibody) {
    const resp = await this.controlRepository.asistencia(body);
    return resp;
  }
}
