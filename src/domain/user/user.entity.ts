import { users } from "@prisma/client";

export interface UserEntity extends users {
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
  role_id: number;
  roles: string;
}

export interface UserUpdateEntity {
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
}
