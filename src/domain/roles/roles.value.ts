import { RoleEntity, RoleCreateEntity, RoleUpdateEntity } from "./roles.entity";

export class RoleValue implements RoleEntity {
  name: string;

  constructor({ name }: RoleEntity) {
    this.name = name;
  }
}

export class RoleCreateValue implements RoleCreateEntity {
  name: string;
  role_has_permissions?: any[];
  constructor({ name, role_has_permissions = [] }: RoleCreateEntity) {
    this.name = name;
    this.role_has_permissions = role_has_permissions;
  }
}

export class RoleUpdatedValue implements RoleUpdateEntity {
  name: string;
  role_has_permissions_delete?: any[];
  role_has_permissions_create?: any[];
  constructor({
    name,
    role_has_permissions_delete = [],
    role_has_permissions_create = [],
  }: RoleUpdateEntity) {
    this.name = name;
    this.role_has_permissions_delete = role_has_permissions_delete;
    this.role_has_permissions_create = role_has_permissions_create;
  }
}
