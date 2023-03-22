import {
  ErrorsInterfaces,
  ResponseInterfaces,
} from "../../types/response.interfaces";

export interface ControlRepository {
  asistencia(
    identificacion: string
  ): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>>;
}
