export interface ModulesEntity {
    id: number;
    name: string | null;
    path: string | null;
    icon: string | null;
    id_padre: number | null;
    order: number | null;
    child?: Array<any>;
    created_at: Date | null;
    created_by: number | null;
    updated_at: Date | null;
    updated_by: number | null;
    deleted_at: Date | null;
    deleted_by: number | null;
}
//# sourceMappingURL=modules.entity.d.ts.map