export interface ComunicacionEntity {
  asunto: string;
  referencia: string;
  texto: string;
  texto_desprendible: string;
  fecha_envio: Date;
  fecha_cierre: Date;
  sede_id: number;
  persona_id: number;
  tipocomunicacion_id: number;
  estado_id: number;
  created_by: number;
  updated_by: number;
}

export interface ComunicacionCreateEntity {
  asunto: string;
  referencia: string;
  texto: string;
  texto_desprendible: string;
  fecha_envio: Date;
  fecha_cierre: Date;
  sede_id: number;
  persona_id: number;
  tipocomunicacion_id: number;
  estado_id: number;
  created_by: number;
  updated_by: number;
}

export interface ComunicacionUpdateEntity {
  asunto: string;
  referencia: string;
  texto: string;
  texto_desprendible: string;
  fecha_envio: Date;
  fecha_cierre: Date;
  sede_id: number;
  persona_id: number;
  tipocomunicacion_id: number;
  estado_id: number;
  created_by: number;
  updated_by: number;
}