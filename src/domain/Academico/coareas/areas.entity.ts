export interface AreaEntity {
  codigo: string;
  nombre: string;
  grado_id: number;
  sede_id: number;
  estado_id: number;
  
}

export interface AreaCreateEntity {
  codigo: string;
  nombre: string;
  grado_id: number;
  sede_id: number;
  estado_id: number;
  cogradosareas?: any[];
}

export interface AreaUpdateEntity {
  codigo: string;
  nombre: string;
  grado_id: number;
  sede_id: number;
  estado_id: number;
  cogradosareas_create?: any[];
  cogradosareas_delete?: any[];
}