export interface UserEntity {
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
}

export interface UserCreateEntity {
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
  perfil_id: number;
  roles: string;
}
