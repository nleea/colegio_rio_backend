import { UserEntity, UserCreateEntity } from "./user.entity";

export class UserValue implements UserEntity {
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

  constructor({
    username,
    password,
    created_at,
    created_by,
    persona_id,
    apitoken,
    codigo_sms,
    current_team_id,
    deleted_at,
    deleted_by,
    email,
    email_verified_at,
    estado_id,
    role_id,
    remember_token,
    telefonomovil,
    two_factor_recovery_codes,
    two_factor_secret,
    updated_at,
    updated_by,
    id,
    personas,
  }: UserEntity) {
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

export class UserCreateValue implements UserCreateEntity {
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
  role_id: number;
  roles: string;

  constructor({
    apellido,
    email,
    fechanacimiento,
    identificacion,
    name,
    nombre,
    password,
    role_id,
    password_confirmation,
    roles,
    sexo_id,
    tipoidentificacion_id,
  }: UserCreateEntity) {
    this.apellido = apellido;
    this.email = email;
    this.fechanacimiento = fechanacimiento;
    this.identificacion = identificacion;
    this.name = name;
    this.nombre = nombre;
    this.password = password;
    this.role_id = role_id;
    this.roles = roles;
    this.sexo_id = sexo_id;
    this.tipoidentificacion_id = tipoidentificacion_id;
    this.password_confirmation = password_confirmation;
  }
}
