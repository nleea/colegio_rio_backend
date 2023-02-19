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
  constructor({
    name,

  }: RoleCreateEntity) {
    this.name = name;
  }
}
