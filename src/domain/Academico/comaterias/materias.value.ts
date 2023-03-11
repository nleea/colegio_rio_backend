import {
  MateriaEntity,
  MateriaCreateEntity,
  MateriaUpdateEntity,
} from "./materias.entity";

export class MateriaValue implements MateriaEntity {
  nombre: string;
  codigo: string;
  grado_id: number;
  sede_id: number;
  area_id: number;
  director_id: number;
  estado_id: number;

  constructor({ nombre, codigo, grado_id, sede_id, director_id, estado_id, area_id }: MateriaEntity) {
    this.nombre = nombre;
    this.grado_id = grado_id;
    this.codigo = codigo;
    this.sede_id = sede_id;
    this.estado_id = estado_id;
    this.director_id = director_id;
    this.area_id = area_id;
  }
}

export class MateriaCreateValue implements MateriaCreateEntity {
  nombre: string;
  codigo: string;
  grado_id: number;
  sede_id: number;
  estado_id: number;
  director_id: number;
  area_id: number;
  cofuncionariomaterias?: any[];

  constructor({
    nombre,
    codigo,
    grado_id,
    sede_id,
    director_id,
    estado_id,
    area_id,
    cofuncionariomaterias
  }: MateriaCreateEntity) {
    this.nombre = nombre;
    this.grado_id = grado_id;
    this.codigo = codigo;
    this.sede_id = sede_id;
    this.estado_id = estado_id;
    this.director_id = director_id;
    this.area_id = area_id;
    this.cofuncionariomaterias = cofuncionariomaterias;
  }
}

export class MateriaUpdatedValue implements MateriaUpdateEntity {
  nombre: string;
  codigo: string;
  grado_id: number;
  sede_id: number;
  director_id: number;
  estado_id: number;
  area_id: number;
  cofuncionariomaterias_create?: any[];
  cofuncionariomaterias_delete?: any[];

  constructor({
    nombre,
    codigo,
    grado_id,
    sede_id,
    director_id,
    estado_id,
    area_id,
    cofuncionariomaterias_create,
    cofuncionariomaterias_delete
  }: MateriaUpdateEntity) {
    this.nombre = nombre;
    this.grado_id = grado_id;
    this.codigo = codigo;
    this.sede_id = sede_id;
    this.director_id = director_id;
    this.estado_id = estado_id;
    this.area_id = area_id;
    this.cofuncionariomaterias_create = cofuncionariomaterias_create;
    this.cofuncionariomaterias_delete = cofuncionariomaterias_delete;
  }
}
