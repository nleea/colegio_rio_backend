import { Request, Response } from "express";
export declare const VerRoles: (req: Request, res: Response, next: () => void) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const CreateRoles: (req: Request, res: Response, next: () => void) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const consulta: (id: any, permissionVer: String) => Promise<boolean>;
//# sourceMappingURL=roles.d.ts.map