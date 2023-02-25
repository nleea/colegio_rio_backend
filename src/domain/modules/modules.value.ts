import { ModulesEntity } from "./modules.entity";

export class ModulesValue implements ModulesEntity {
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
  constructor({
    id,
    name,
    path,
    icon,
    id_padre,
    order,
    created_at,
    created_by,
    updated_at,
    updated_by,
    deleted_at,
    deleted_by,
  }: {
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
  }) {
    this.created_at = created_at;
    this.created_by = created_by;
    this.deleted_at = deleted_at;
    this.deleted_by = deleted_by;
    this.icon = icon;
    this.id = id;
    this.id_padre = id_padre;
    this.order = order;
    this.name = name;
    this.path = path;
    this.updated_at = updated_at;
    this.updated_by = updated_by;
  }
}
