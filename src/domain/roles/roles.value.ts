import { RolesEntity } from "./roles.entity";

export class RolesValue implements RolesEntity {
  name: string;

  constructor({ name }: RolesEntity) {
    this.name = name;
  }
}
