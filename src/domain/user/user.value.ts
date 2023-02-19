import { UserEntity } from "./user.entity";

export class UserValue implements UserEntity {
  username: string;
  password: string;
  two_factor_secret: string | undefined;
  two_factor_recovery_codes: string | undefined;
  telefonomovil: string | undefined;
  email: string | undefined;
  email_verified_at: Date;
  codigo_sms: string | undefined;
  apitoken: string | undefined;
  remember_token: string | undefined;
  current_team_id: number | undefined;
  estado_id: number | undefined;
  perfil_id: number | undefined;
  persona_id: number;
  created_at: Date;
  created_by: number;
  updated_at: Date;
  updated_by: number;
  deleted_at: Date;
  deleted_by: number;

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
    perfil_id,
    remember_token,
    telefonomovil,
    two_factor_recovery_codes,
    two_factor_secret,
    updated_at,
    updated_by,
  }: UserEntity) {
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
    this.perfil_id = perfil_id;
    this.remember_token = remember_token;
    this.telefonomovil = telefonomovil;
    this.two_factor_recovery_codes = two_factor_recovery_codes;
    this.two_factor_secret = two_factor_secret;
    this.updated_at = updated_at;
    this.updated_by = updated_by;
  }
}
