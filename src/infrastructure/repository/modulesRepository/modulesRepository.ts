import { ModulesEntity } from "../../../domain/modules/modules.entity";
import { ModulesRepository } from "../../../domain/modules/modules.repository";
import {
  ErrorsInterfaces,
  ResponseInterfaces,
} from "../../../types/response.interfaces";
import { PrismaClient } from "@prisma/client";
import { crearMenu } from "../../../helpers/menu_resources";

export class ModulesRepositoryClass implements ModulesRepository {
  constructor(private db: PrismaClient) {}

  async findAllModules(): Promise<
    ErrorsInterfaces<any> | ResponseInterfaces<any>
  > {
    try {
      const resp = await this.db.roles.findMany({
        select: {
          name: true,
          categoria: true,
          modulos_has_role: { select: { modulos: { select: { name: true } } } },
        },
      });
      return {
        data: resp,
        ok: true,
        status: 200,
      };
    } catch (error) {
      return {
        ok: false,
        data: "sss",
        status: 400,
      };
    }
  }

  async createModules(
    rol: number,
    body: ModulesEntity[]
  ): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>> {
    try {
      const lastId = await this.db.modulos.count();
      const c = crearMenu(body, lastId + 1, 0);

      await this.db.$transaction(
        c.map((moduledata) =>
          this.db.modulos_has_role.create({
            data: {
              roles: { connect: { id: rol } },
              modulos: { create: moduledata },
            },
          })
        )
      );

      return {
        data: "Ok",
        ok: true,
        status: 200,
      };
    } catch (error) {
      console.log(error);
      return {
        ok: false,
        data: "sss",
        status: 400,
      };
    }
  }

  async deleteModule(
    rolId: number,
    modulos: any[]
  ): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>> {
    try {
      await this.db.modulos_has_role.deleteMany({
        where: {
          AND: {
            role_id: rolId,
            modulo_id: { in: modulos },
          },
        },
      });
      return {
        data: "Ok",
        ok: true,
        status: 200,
      };
    } catch (error) {
      return {
        data: error,
        ok: false,
        status: 400,
      };
    }
  }

  async createModuleRol(
    rolId: number,
    modulos: any[]
  ): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>> {
    try {
      await this.db.$transaction(
        modulos.map((e) =>
          this.db.modulos_has_role.create({
            data: {
              roles: { connect: { id: rolId } },
              modulos: { connect: { id: e } },
            },
          })
        )
      );
      return {
        data: "ok",
        ok: true,
        status: 200,
      };
    } catch (error) {
      return { data: error, ok: false, status: 404 };
    }
  }
}
