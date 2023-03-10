import {
  CursoEntity,
  CursoCreateEntity,
  CursoUpdateEntity,
} from "./comunicaciones.entity";

export class CursoValue implements CursoEntity {
  nombre: string;
  codigo: string;
  grado_id: number;
  sede_id: number;
  director_id: number;
  estado_id: number;

  constructor({ nombre, codigo, grado_id, sede_id, director_id, estado_id }: CursoEntity) {
    this.nombre = nombre;
    this.grado_id = grado_id;
    this.codigo = codigo;
    this.sede_id = sede_id;
    this.estado_id = estado_id;
    this.director_id = director_id;
  }
}

export class CursoCreateValue implements CursoCreateEntity {
  nombre: string;
  codigo: string;
  grado_id: number;
  sede_id: number;
  estado_id: number;
  director_id: number;

  constructor({
    nombre,
    codigo,
    grado_id,
    sede_id,
    director_id,
    estado_id,
  }: CursoCreateEntity) {
    this.nombre = nombre;
    this.grado_id = grado_id;
    this.codigo = codigo;
    this.sede_id = sede_id;
    this.estado_id = estado_id;
    this.director_id = director_id;
  }
}

export class CursoUpdatedValue implements CursoUpdateEntity {
  nombre: string;
  codigo: string;
  grado_id: number;
  sede_id: number;
  director_id: number;
  estado_id: number;

  constructor({
    nombre,
    codigo,
    grado_id,
    sede_id,
    director_id,
    estado_id,
  }: CursoUpdateEntity) {
    this.nombre = nombre;
    this.grado_id = grado_id;
    this.codigo = codigo;
    this.sede_id = sede_id;
    this.director_id = director_id;
    this.estado_id = estado_id;
  }
}
