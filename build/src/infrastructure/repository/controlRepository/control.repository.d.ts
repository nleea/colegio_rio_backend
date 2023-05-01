import { PrismaClient } from "@prisma/client";
import { ControlRepository } from "@/domain/control/control.repository";
import { ErrorsInterfaces, ResponseInterfaces } from "@/types/response.interfaces";
import { Ibody } from "@/types/control.interface";
export declare const compile: (template: string, data: any) => string;
export declare class ControlRepositoryClass implements ControlRepository {
    private db;
    constructor(db: PrismaClient);
    userAsistencia(id: number): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>>;
    userAsistenciaQuery(ids: number[]): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>>;
    asistencia(body: Ibody, param?: any): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>>;
}
//# sourceMappingURL=control.repository.d.ts.map