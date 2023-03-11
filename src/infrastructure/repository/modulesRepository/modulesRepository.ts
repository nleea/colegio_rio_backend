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

  async findAllRolesModules(
    ModulosName: string,
    inModule: boolean = false
  ): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>> {
    try {
      const resp = await this.db.roles.findMany({
        where: { name: ModulosName },
        select: {
          name: true,
          categoria: true,
          modulos_has_role: {
            select: {
              modulos: {
                select: { name: true, id_padre: true, path: true, id: true },
              },
            },
          },
        },
      });

      const flatModule = resp.map((c) => {
        return {
          ...c,
          modulos_has_role: c.modulos_has_role.flatMap((c) => c.modulos),
        };
      });

      return {
        data: flatModule,
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

  async moduleWithoutRol(
    rolId: number
  ): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>> {
    try {
      const modules = await this.db.modulos.findMany({
        where: {
          modulos_has_role: { none: { role_id: Number(rolId) } },
        },
      });
      return {
        data: modules,
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

  async findAllModules(): Promise<
    ErrorsInterfaces<any> | ResponseInterfaces<any>
  > {
    try {
      const resp = await this.db.roles.findMany({
        orderBy: { id: "desc" },
        select: {
          name: true,
          categoria: true,
          modulos_has_role: {
            select: {
              modulos: {
                select: { name: true, id_padre: true, path: true, id: true },
              },
            },
          },
        },
      });

      const flatModule = resp.map((c) => {
        const id_padre = c.modulos_has_role.find((h) => h.modulos)?.modulos
          ?.name;
        return {
          ...c,
          modulos_has_role: c.modulos_has_role.flatMap((d) => {
            return {
              ...d.modulos,
              dependencia: id_padre === d.modulos?.name ? "Root" : id_padre,
            };
          }),
        };
      });

      return {
        data: flatModule,
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
      const menu = crearMenu(body, lastId + 1, 0);

      await this.db.$transaction(
        menu.map((moduledata) =>
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
    rolName: string,
    modulos: any[]
  ): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>> {
    try {
      await this.db.modulos_has_role.deleteMany({
        where: {
          AND: {
            OR: [{ role_id: rolId }, { roles: { name: rolName } }],
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
              roles: { connect: { id: Number(rolId) } },
              modulos: { connect: { id: Number(e) } },
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
