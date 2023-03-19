import {
  ComunicacionEntity,
  ComunicacionCreateEntity,
  ComunicacionUpdateEntity,
} from "./comunicaciones.entity";

export class ComunicacionValue implements ComunicacionEntity {
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

  constructor({ asunto, referencia, texto, sede_id, texto_desprendible, estado_id, 
    fecha_envio, fecha_cierre, persona_id, tipocomunicacion_id, created_by, updated_by}: ComunicacionEntity) {
    this.asunto = asunto;
    this.texto = texto;
    this.referencia = referencia;
    this.sede_id = sede_id;
    this.estado_id = estado_id;
    this.texto_desprendible = texto_desprendible;
    this.fecha_envio = fecha_envio;
    this.fecha_cierre = fecha_cierre;
    this.persona_id = persona_id;
    this.tipocomunicacion_id = tipocomunicacion_id;
    this.created_by = created_by;
    this.updated_by = updated_by;
  }

}

export class ComunicacionCreateValue implements ComunicacionCreateEntity {
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

  constructor({ asunto, referencia, texto, sede_id, texto_desprendible, estado_id, 
    fecha_envio, fecha_cierre, persona_id, tipocomunicacion_id, created_by, updated_by}: ComunicacionCreateEntity) {
    this.asunto = asunto;
    this.texto = texto;
    this.referencia = referencia;
    this.sede_id = sede_id;
    this.estado_id = estado_id;
    this.texto_desprendible = texto_desprendible;
    this.fecha_envio = fecha_envio;
    this.fecha_cierre = fecha_cierre;
    this.persona_id = persona_id;
    this.tipocomunicacion_id = tipocomunicacion_id;
    this.created_by = created_by;
    this.updated_by = updated_by;
  }
}

export class ComunicacionUpdatedValue implements ComunicacionUpdateEntity {
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

  constructor({ asunto, referencia, texto, sede_id, texto_desprendible, estado_id, 
    fecha_envio, fecha_cierre, persona_id, tipocomunicacion_id, created_by, updated_by}: ComunicacionUpdatedValue) {
    this.asunto = asunto;
    this.texto = texto;
    this.referencia = referencia;
    this.sede_id = sede_id;
    this.estado_id = estado_id;
    this.texto_desprendible = texto_desprendible;
    this.fecha_envio = fecha_envio;
    this.fecha_cierre = fecha_cierre;
    this.persona_id = persona_id;
    this.tipocomunicacion_id = tipocomunicacion_id;
    this.created_by = created_by;
    this.updated_by = updated_by;
  }
}
