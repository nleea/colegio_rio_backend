import { consulta } from "./roles";

describe("findUnique() tests", () => {
  it("should return true if permissionVer is found", async () => {
    const permissionVer = "ver-rol";
    const actual = await consulta(1, permissionVer);
    expect(actual).toBe(true);
  });

  it("should return false if permissionVer is found", async () => {
    const permissionVer = "crear-rol";
    const actual = await consulta(2, permissionVer);
    expect(actual).toBe(false);
  });

  it("should return false if user is not found", async () => {
    const permissionVer = "crear-rol";
    const actual = await consulta(3, permissionVer);
    expect(actual).toBe(false);
  });
});
