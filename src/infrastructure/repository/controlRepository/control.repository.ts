import { PrismaClient } from "@prisma/client";
import { ControlRepository } from "@/domain/control/control.repository";
import {
  ErrorsInterfaces,
  ResponseInterfaces,
} from "@/types/response.interfaces";
import { Ibody } from "@/types/control.interface";
import QRcode from "qrcode";

export class ControlRepositoryClass implements ControlRepository {
  constructor(private db: PrismaClient) {}

  async userAsistencia(
    id: number
  ): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>> {
    const user = await this.db.estudiantes.findUnique({ where: { id: id } });

    if (!user) return { data: "", ok: false, status: 400 };

    const url = `http://localhost:4000/api/asistencia/${user?.id}`;

    const qr = await QRcode.toDataURL(url);

    return { data: qr, ok: true, status: 200 };
  }

  async asistencia(
    body: Ibody,
    param?: any
  ): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>> {
    try {
      if (param["estudianteId"]) {
        const id = param["estudianteId"];

        const user = await this.db.estudiantes.findUnique({
          where: { id: Number(id) },
        });

        if (!user) {
          return { data: "Error", ok: false, status: 400 };
        }

        await this.db.asistencia.create({
          data: {
            fechaingreso: new Date(),
            entrada_id: 0,
            estado_id: 1,
            estudiante_id: user.id,
          },
        });
        return { data: "OK", ok: true, status: 200 };
      }

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
      console.log(error);
      return { data: error, ok: true, status: 400 };
    }
  }
}
