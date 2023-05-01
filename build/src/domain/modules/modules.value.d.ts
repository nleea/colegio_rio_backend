import { ModulesEntity } from "./modules.entity";
export declare class ModulesValue implements ModulesEntity {
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
    constructor({ id, name, path, icon, id_padre, order, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by, }: {
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
    });
}
//# sourceMappingURL=modules.value.d.ts.map