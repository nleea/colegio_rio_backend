import { RolesRepository } from "../../../domain/roles/roles.repository";
import {
  RoleCreateEntity,
  RoleEntity,
  RoleUpdateEntity,
} from "../../../domain/roles/roles.entity";
import { Prisma } from "@prisma/client";
import { exclude } from "../../../helpers/omit.fields";
import { db } from "../../models/db";
import {
  ResponseInterfaces,
  ErrorsInterfaces,
} from "../../../types/response.interfaces";

export class RolesRepositoryClass implements RolesRepository {
  #db: typeof db;
  constructor() {
    this.#db = db;
  }

  async findAllRoles(): Promise<
    ResponseInterfaces<any> | ErrorsInterfaces<any>
  > {
    try {
      const resp = await db.roles.findMany({
        include: {
          role_has_permissions: {
            select: {
              permissions: { select: { id: true, name: true } },
            },
          },
        },
      });
      exclude<typeof resp, keyof typeof resp>(resp, [
        "created_at",
        "updated_at",
      ] as any);

      return { data: resp, ok: true, status: 200 };
    } catch (error) {
      return { data: error, ok: true, status: 200 };
    }
  }
  async showRole(
    id: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    try {
      const resp = await db.roles.findMany({
        where: { id: id },
        include: {
          role_has_permissions: {
            select: {
              permissions: { select: { id: true, name: true } },
            },
          },
        },
      });
      exclude<typeof resp, keyof typeof resp>(resp, [
        "created_at",
        "updated_at",
      ] as any);

      return {
        data: resp,
        ok: false,
        status: 200,
      };
    } catch (error) {
      return {
        data: error,
        ok: false,
        status: 200,
      };
    }
  }

  async createRolesP(): Promise<
    ResponseInterfaces<any> | ErrorsInterfaces<any>
  > {
    try {
      const resp = await db.permissions.findMany();

      return {
        data: resp,
        ok: false,
        status: 200,
      };
    } catch (error) {
      return {
        data: error,
        ok: false,
        status: 200,
      };
    }
  }

  async storeRoles(
    body: RoleCreateEntity
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    const { name, role_has_permissions } = body;

    try {
      await this.#db.roles.create({
        data: {
          name: name,
          categoria: "",
          role_has_permissions: {
            create: role_has_permissions,
          },
        },
      });

      return {
        status: 200,
        data: "Ok",
        ok: true,
      };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        console.log(e);
        return {
          status: 400,
          data: e.message,
          ok: false,
        };
      } else {
        return {
          status: 400,
          data: "Unknow Error",
          ok: false,
        };
      }
    }
  }

  async showRolesPermissions(
    id: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    const resp = await db.users.findUnique({
      where: {
        id: id,
      },
    });
    return {
      data: resp,
      ok: false,
      status: 200,
    };
  }

  async deleteRole(
    id: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    const resp = await db.roles.delete({
      where: {
        id: id,
      },
    });
    return {
      data: resp,
      ok: false,
      status: 200,
    };
  }

  async updatedRole(
    body: RoleUpdateEntity,
    id: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    const { name, role_has_permissions_create, role_has_permissions_delete } =
      body;

    await db.$transaction([
      db.roles.update({
        where: { id: id },
        data: {
          name,
          role_has_permissions: { create: role_has_permissions_create },
        },
      }),
      db.role_has_permissions.deleteMany({
        where: {
          permission_id: {
            in: role_has_permissions_delete,
          },
        },
      }),
    ]);

    return {
      data: "OK",
      ok: true,
      status: 200,
    };
  }

  async removePermission(
    id: number,
    role: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    const resp = await db.role_has_permissions.delete({
      where: {
        id: id,
      },
    });

    return {
      data: resp,
      ok: false,
      status: 200,
    };
  }

  async addPermission(
    permission_id: number,
    role: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>> {
    const roleUser = await db.role_has_permissions.create({
      data: { role_id: role, permission_id: permission_id },
    });

    return {
      data: roleUser,
      ok: false,
      status: 200,
    };
  }
}
