export interface RoleEntity {
  name: string;
  
}

export interface RoleCreateEntity {
  name: string;
  role_has_permissions?: any[];
}

export interface RoleUpdateEntity {
  name: string;
  role_has_permissions_delete?: any[];
  role_has_permissions_create?: any[];
}