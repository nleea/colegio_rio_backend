import { UserEntity, UserCreateEntity } from "./user.entity";
export declare class UserValue implements UserEntity {
    id: number;
    username: string;
    password: string;
    two_factor_secret: string | null;
    two_factor_recovery_codes: string | null;
    telefonomovil: string | null;
    email: string | null;
    email_verified_at: Date;
    codigo_sms: string | null;
    apitoken: string | null;
    remember_token: string | null;
    current_team_id: number | null;
    estado_id: number | null;
    role_id: number | null;
    persona_id: number;
    created_at: Date;
    created_by: number;
    updated_at: Date;
    updated_by: number;
    deleted_at: Date;
    deleted_by: number;
    personas?: any;
    constructor({ username, password, created_at, created_by, persona_id, apitoken, codigo_sms, current_team_id, deleted_at, deleted_by, email, email_verified_at, estado_id, role_id, remember_token, telefonomovil, two_factor_recovery_codes, two_factor_secret, updated_at, updated_by, id, personas, }: UserEntity);
}
export declare class UserCreateValue implements UserCreateEntity {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    identificacion: string;
    fechanacimiento: string;
    nombre: string;
    apellido: string;
    tipoidentificacion_id: number;
    sexo_id: number;
    roles: string;
    telefonomovil: string;
    fechaingreso?: string;
    tarjetaprofesional?: string;
    fechasalida?: string;
    constructor({ apellido, email, fechanacimiento, identificacion, name, nombre, password, password_confirmation, roles, sexo_id, tipoidentificacion_id, telefonomovil, tarjetaprofesional, fechasalida, fechaingreso, }: UserCreateEntity);
}
//# sourceMappingURL=user.value.d.ts.map