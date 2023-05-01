"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roles_1 = require("./roles");
describe("findUnique() tests", () => {
    it("should return true if permissionVer is found", async () => {
        const permissionVer = "ver-rol";
        const actual = await (0, roles_1.consulta)(1, permissionVer);
        expect(actual).toBe(true);
    });
    it("should return false if permissionVer is found", async () => {
        const permissionVer = "crear-rol";
        const actual = await (0, roles_1.consulta)(2, permissionVer);
        expect(actual).toBe(false);
    });
    it("should return false if user is not found", async () => {
        const permissionVer = "crear-rol";
        const actual = await (0, roles_1.consulta)(3, permissionVer);
        expect(actual).toBe(false);
    });
});
//# sourceMappingURL=roles.test.js.map