import { ErrorsInterfaces, ResponseInterfaces } from "@/types/response.interfaces";
import { Ibody } from "@/types/control.interface";
export interface ControlRepository {
    asistencia(body: Partial<Ibody>, param?: any): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>>;
    userAsistencia(id: number): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>>;
    userAsistenciaQuery(ids: number[]): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>>;
}
//# sourceMappingURL=control.repository.d.ts.map