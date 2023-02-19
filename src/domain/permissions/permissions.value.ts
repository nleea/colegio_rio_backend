import { PermissionsEntity } from "./permissions.entity";

export class PermissionsValue implements PermissionsEntity {
  name: string;

  constructor({ name }: PermissionsEntity) {
    this.name = name;
  }
}
