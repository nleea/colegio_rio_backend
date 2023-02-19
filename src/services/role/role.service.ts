import { db } from "../../db";
import { RoleInterface } from "../../types/role.interface";
import { Prisma } from "@prisma/client";

interface responseInterface {
  status: number;
  message: any;
}

const GetAllRoles = async () => {
    try {

      return await db.roles.findMany();
    } catch (error) {
      console.log(error);
    }
  };
  
  export { GetAllRoles};