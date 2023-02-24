import { modulos } from "@prisma/client";

export interface ModulesEntity extends modulos {
  id: number;
  name: string | null;
  path: string | null;
  icon: string | null;
  id_padre: number | null;
  order: number | null;
  created_at: Date | null;
  created_by: number | null;
  updated_at: Date | null;
  updated_by: number | null;
  deleted_at: Date | null;
  deleted_by: number | null;
}
