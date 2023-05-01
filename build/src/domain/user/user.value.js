"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateValue = exports.UserValue = void 0;
class UserValue {
    id;
    username;
    password;
    two_factor_secret;
    two_factor_recovery_codes;
    telefonomovil;
    email;
    email_verified_at;
    codigo_sms;
    apitoken;
    remember_token;
    current_team_id;
    estado_id;
    role_id;
    persona_id;
    created_at;
    created_by;
    updated_at;
    updated_by;
    deleted_at;
    deleted_by;
    personas;
    constructor({ username, password, created_at, created_by, persona_id, apitoken, codigo_sms, current_team_id, deleted_at, deleted_by, email, email_verified_at, estado_id, role_id, remember_token, telefonomovil, two_factor_recovery_codes, two_factor_secret, updated_at, updated_by, id, personas, }) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.apitoken = apitoken;
        this.codigo_sms = codigo_sms;
        this.created_at = created_at;
        this.created_by = created_by;
        this.current_team_id = current_team_id;
        this.deleted_at = deleted_at;
        this.deleted_by = deleted_by;
        this.email = email;
        this.email_verified_at = email_verified_at;
        this.persona_id = persona_id;
        this.estado_id = estado_id;
        this.role_id = role_id;
        this.remember_token = remember_token;
        this.telefonomovil = telefonomovil;
        this.two_factor_recovery_codes = two_factor_recovery_codes;
        this.two_factor_secret = two_factor_secret;
        this.updated_at = updated_at;
        this.updated_by = updated_by;
        this.personas = personas;
    }
}
exports.UserValue = UserValue;
class UserCreateValue {
    name;
    email;
    password;
    password_confirmation;
    identificacion;
    fechanacimiento;
    nombre;
    apellido;
    tipoidentificacion_id;
    sexo_id;
    roles;
    telefonomovil;
    fechaingreso;
    tarjetaprofesional;
    fechasalida;
    constructor({ apellido, email, fechanacimiento, identificacion, name, nombre, password, password_confirmation, roles, sexo_id, tipoidentificacion_id, telefonomovil, tarjetaprofesional, fechasalida, fechaingreso, }) {
        this.apellido = apellido;
        this.email = email;
        this.fechanacimiento = fechanacimiento;
        this.identificacion = identificacion;
        this.name = name;
        this.nombre = nombre;
        this.password = password;
        this.roles = roles;
        this.sexo_id = sexo_id;
        this.tipoidentificacion_id = tipoidentificacion_id;
        this.password_confirmation = password_confirmation;
        this.telefonomovil = telefonomovil;
        this.fechaingreso = fechaingreso;
        this.fechasalida = fechasalida;
        this.tarjetaprofesional = tarjetaprofesional;
    }
}
exports.UserCreateValue = UserCreateValue;
//# sourceMappingURL=user.value.js.map