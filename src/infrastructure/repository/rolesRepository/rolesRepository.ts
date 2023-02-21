import { RolesRepository } from "../../../domain/roles/roles.repository";
import { RoleEntity } from "../../../domain/roles/roles.entity";
import { Prisma } from "@prisma/client";
import { exclude } from "../../../helpers/omit.fields";
import { db } from "../../models/db";

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
              permissions: { select: { name: true, guard_name: true } },
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

  // roles: RolesEntity

  async storeRoles(body: RoleEntity): Promise<any>{

    const {
      name,
    } = body;

    try {
      await this.#db.roles.create({
        data: {
          name,
          guard_name:'',
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
}
