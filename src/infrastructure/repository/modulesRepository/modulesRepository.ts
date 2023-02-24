import { ModulesRepository } from "../../../domain/modules/modules.repository";
import {
  ErrorsInterfaces,
  ResponseInterfaces,
} from "../../../types/response.interfaces";
import { PrismaClient } from "@prisma/client";

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
}
