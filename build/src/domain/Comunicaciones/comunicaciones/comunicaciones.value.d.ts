import { ComunicacionEntity, ComunicacionCreateEntity, ComunicacionUpdateEntity } from "./comunicaciones.entity";
export declare class ComunicacionValue implements ComunicacionEntity {
    asunto: string;
    referencia: string;
    texto: string;
    texto_desprendible: string;
    fecha_envio: Date;
    fecha_cierre: Date;
    sede_id: number;
    funcionario_id: number;
    tipocomunicacion_id: number;
    estado_id: number;
    created_by: number;
    updated_by: number;
    constructor({ asunto, referencia, texto, sede_id, texto_desprendible, estado_id, fecha_envio, fecha_cierre, funcionario_id, tipocomunicacion_id, created_by, updated_by }: ComunicacionEntity);
}
export declare class ComunicacionCreateValue implements ComunicacionCreateEntity {
    asunto: string;
    referencia: string;
    texto: string;
    texto_desprendible: string;
    fecha_envio: Date;
    fecha_cierre: Date;
    sede_id: number;
    funcionario_id: number;
    tipocomunicacion_id: number;
    estado_id: number;
    created_by: number;
    updated_by: number;
    constructor({ asunto, referencia, texto, sede_id, texto_desprendible, estado_id, fecha_envio, fecha_cierre, funcionario_id, tipocomunicacion_id, created_by, updated_by }: ComunicacionCreateEntity);
}
export declare class ComunicacionUpdatedValue implements ComunicacionUpdateEntity {
    asunto: string;
    referencia: string;
    texto: string;
    texto_desprendible: string;
    fecha_envio: Date;
    fecha_cierre: Date;
    sede_id: number;
    funcionario_id: number;
    tipocomunicacion_id: number;
    estado_id: number;
    created_by: number;
    updated_by: number;
    constructor({ asunto, referencia, texto, sede_id, texto_desprendible, estado_id, fecha_envio, fecha_cierre, funcionario_id, tipocomunicacion_id, created_by, updated_by }: ComunicacionUpdatedValue);
}
//# sourceMappingURL=comunicaciones.value.d.ts.map