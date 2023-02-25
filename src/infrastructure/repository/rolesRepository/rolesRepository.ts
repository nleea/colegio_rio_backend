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

  async findAllRoles(): Promise<any> {
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

      return resp;
    } catch (error) {
      console.log(error);
    }
  }
  async showRole(id: number): Promise<any> {
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

      return resp;
    } catch (error) {
      console.log(error);
    }
  }

  async createRolesP(): Promise<any> {
    // throw new Error("Method not implements");

    try {
      const resp = await db.permissions.findMany();

      return resp;
    } catch (error) {
      console.log(error);
    }
  }

  async storeRoles(body: RoleCreateEntity): Promise<any> {
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

  async showRolesPermissions(id: number): Promise<any> {
    const resp = await db.users.findUnique({
      where: {
        id: id,
      },
    });
  }

  async deleteRole(id: number): Promise<any> {
    const resp = await db.roles.delete({
      where: {
        id: id,
      },
    });
  }

  async updatedRole(body: RoleUpdateEntity, id: number): Promise<any> {
    const { name, role_has_permissions } = body;
    const resp = await db.roles.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        role_has_permissions: {},
      },
    });
  }
}
