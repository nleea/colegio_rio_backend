import { PrismaClient } from "@prisma/client";
import { ControlRepository } from "@/domain/control/control.repository";
import {
  ErrorsInterfaces,
  ResponseInterfaces,
} from "@/types/response.interfaces";
import { Ibody } from "@/types/control.interface";

export class ControlRepositoryClass implements ControlRepository {
  constructor(private db: PrismaClient) {}

  async asistencia(
    body: Ibody
  ): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>> {
    try {
      const { identificacion, ...restData } = body;

      const estudiante = await this.db.estudiantes.findMany({
        where: { personas: { identificacion: identificacion } },
      });

      await this.db.asistencia.create({
        data: {
          fechaingreso: new Date(),
          entrada_id: 0,
          estado_id: 1,
          estudiante_id: estudiante[0].id,
          ...restData,
        },
      });

      return { data: "OK", ok: true, status: 200 };
    } catch (error) {
      return { data: error, ok: true, status: 400 };
    }
  }
}
