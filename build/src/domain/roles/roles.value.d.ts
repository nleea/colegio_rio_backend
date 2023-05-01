import { RoleEntity, RoleCreateEntity, RoleUpdateEntity } from "./roles.entity";
export declare class RoleValue implements RoleEntity {
    name: string;
    constructor({ name }: RoleEntity);
}
export declare class RoleCreateValue implements RoleCreateEntity {
    name: string;
    role_has_permissions?: any[];
    constructor({ name, role_has_permissions }: RoleCreateEntity);
}
export declare class RoleUpdatedValue implements RoleUpdateEntity {
    name: string;
    role_has_permissions_delete?: any[];
    role_has_permissions_create?: any[];
    constructor({ name, role_has_permissions_delete, role_has_permissions_create, }: RoleUpdateEntity);
}
//# sourceMappingURL=roles.value.d.ts.map