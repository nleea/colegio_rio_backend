import { PrismaClient } from "@prisma/client";
import { ControlRepository } from "../../../domain/control/control.repository";
import {
  ErrorsInterfaces,
  ResponseInterfaces,
} from "../../../types/response.interfaces";

export class ControlRepositoryClass implements ControlRepository {
  constructor(private db: PrismaClient) {}

  async asistencia(
    identificacion: string
  ): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>> {
    try {
      const estudiante = await this.db.estudiantes.findMany({
        where: { personas: { identificacion: identificacion } },
      });

      await this.db.asistencia.create({
        data: {
          fechaingreso: new Date(),
          entrada_id: 0,
          estado_id: 1,
          estudiante_id: estudiante[0].id,
        },
      });

      return { data: "", ok: true, status: 200 };
    } catch (error) {
      console.log(error)
      return { data: error, ok: true, status: 400 };
    }
  }
}
