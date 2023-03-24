import {
  ErrorsInterfaces,
  ResponseInterfaces,
} from "@/types/response.interfaces";
import { Ibody } from "@/types/control.interface";

export interface ControlRepository {
  asistencia(
    body: Partial<Ibody>
  ): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>>;
}
