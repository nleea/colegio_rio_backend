import { db } from "../../db";
import { RoleInterface } from "../../types/role.interface";
import { exclude } from "../../helpers/omit.fields";

interface responseInterface {
  status: number;
  message: any;
}

const GetAllRoles = async () => {
  try {
    return await db.roles.findMany({
      include: {
        role_has_permissions: {
          select: { permissions: { select: { name: true, guard_name: true } } },
        },
      },
    });
    // exclude<typeof resp, keyof typeof resp>(resp, [
    //   "created_at",
    //   "updated_at",
    // ] as any);

    
  } catch (error) {
    console.log(error);
  }
};

export { GetAllRoles };
