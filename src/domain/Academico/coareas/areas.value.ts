import {
  AreaEntity,
  AreaCreateEntity,
  AreaUpdateEntity,
} from "./areas.entity";

export class AreaValue implements AreaEntity {
  nombre: string;
  codigo: string;
  grado_id: number;
  sede_id: number;
  estado_id: number;
  

  constructor({ nombre, codigo, grado_id, sede_id, estado_id }: AreaEntity) {
    this.nombre = nombre;
    this.grado_id = grado_id;
    this.codigo = codigo;
    this.sede_id = sede_id;
    this.estado_id = estado_id;
    
  }
}

export class AreaCreateValue implements AreaCreateEntity {
  nombre: string;
  codigo: string;
  grado_id: number;
  sede_id: number;
  estado_id: number;
  

  constructor({
    nombre,
    codigo,
    grado_id,
    sede_id,
    estado_id
    
  }: AreaCreateEntity) {
    this.nombre = nombre;
    this.grado_id = grado_id;
    this.codigo = codigo;
    this.sede_id = sede_id;
    this.estado_id = estado_id;
    
  }
}

export class AreaUpdatedValue implements AreaUpdateEntity {
  nombre: string;
  codigo: string;
  grado_id: number;
  sede_id: number;
  estado_id: number;
  

  constructor({
    nombre,
    codigo,
    grado_id,
    sede_id,
    estado_id
    
  }: AreaUpdateEntity) {
    this.nombre = nombre;
    this.grado_id = grado_id;
    this.codigo = codigo;
    this.sede_id = sede_id;
    this.estado_id = estado_id;
    
  }
}
