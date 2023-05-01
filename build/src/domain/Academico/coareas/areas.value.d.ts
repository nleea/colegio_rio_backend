import { AreaEntity, AreaCreateEntity, AreaUpdateEntity } from "./areas.entity";
export declare class AreaValue implements AreaEntity {
    nombre: string;
    codigo: string;
    grado_id: number;
    sede_id: number;
    estado_id: number;
    constructor({ nombre, codigo, grado_id, sede_id, estado_id }: AreaEntity);
}
export declare class AreaCreateValue implements AreaCreateEntity {
    nombre: string;
    codigo: string;
    grado_id: number;
    sede_id: number;
    estado_id: number;
    cogradosareas?: any[];
    constructor({ nombre, codigo, grado_id, sede_id, estado_id, cogradosareas }: AreaCreateEntity);
}
export declare class AreaUpdatedValue implements AreaUpdateEntity {
    nombre: string;
    codigo: string;
    grado_id: number;
    sede_id: number;
    estado_id: number;
    cogradosareas_create?: any[];
    cogradosareas_delete?: any[];
    constructor({ nombre, codigo, grado_id, sede_id, estado_id, cogradosareas_create, cogradosareas_delete }: AreaUpdateEntity);
}
//# sourceMappingURL=areas.value.d.ts.map