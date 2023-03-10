export interface CursoEntity {
  codigo: string;
  nombre: string;
  grado_id: number;
  sede_id: number;
  estado_id: number;
  director_id: number;
}

export interface CursoCreateEntity {
  codigo: string;
  nombre: string;
  grado_id: number;
  sede_id: number;
  estado_id: number;
  director_id: number;
}

export interface CursoUpdateEntity {
  codigo: string;
  nombre: string;
  grado_id: number;
  sede_id: number;
  estado_id: number;
  director_id: number;
}