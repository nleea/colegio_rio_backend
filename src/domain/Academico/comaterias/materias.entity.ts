export interface MateriaEntity {
  codigo: string;
  nombre: string;
  grado_id: number;
  sede_id: number;
  estado_id: number;
  director_id: number;
  area_id: number;

}

export interface MateriaCreateEntity {
  codigo: string;
  nombre: string;
  grado_id: number;
  sede_id: number;
  estado_id: number;
  director_id: number;
  area_id: number;
  cofuncionariomaterias?: any[];
}

export interface MateriaUpdateEntity {
  codigo: string;
  nombre: string;
  grado_id: number;
  sede_id: number;
  estado_id: number;
  director_id: number;
  area_id: number;
  cofuncionariomaterias_create?: any[];
  cofuncionariomaterias_delete?: any[];
}