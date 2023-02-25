import { RoleEntity, RoleCreateEntity } from "./roles.entity";

export class RoleValue implements RoleEntity {
  
  name: string;
  
  constructor({
    name,
  }: RoleEntity) {
    this.name = name;
  }
}

export class RoleCreateValue implements RoleCreateEntity {
  
  name: string;
  role_has_permissions?: any[];
  constructor({
    name,
    role_has_permissions = []
  }: RoleCreateEntity) {
    this.name = name;
    this.role_has_permissions = role_has_permissions
  }
}
export class RoleUpdatedValue implements RoleCreateEntity {
  
  name: string;
  role_has_permissions?: any[];
  constructor({
    name,
    role_has_permissions = []
  }: RoleCreateEntity) {
    this.name = name;
    this.role_has_permissions = role_has_permissions
  }
}
