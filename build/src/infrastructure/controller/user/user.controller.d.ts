import { Request, Response } from "express";
import { UserUsesCases } from "../../../aplication/user/user.usesCases";
export declare class UserController {
    private userUsesCases;
    constructor(userUsesCases: UserUsesCases);
    GetAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    insertUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    auth: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    userProfile: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    validateToken: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=user.controller.d.ts.map