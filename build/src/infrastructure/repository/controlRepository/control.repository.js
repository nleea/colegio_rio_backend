"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlRepositoryClass = exports.compile = void 0;
const qrcode_1 = __importDefault(require("qrcode"));
const puppeteer_1 = __importDefault(require("puppeteer"));
const handlebars_1 = __importDefault(require("handlebars"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const adm_zip_1 = __importDefault(require("adm-zip"));
const compile = (template, data) => {
    const filePath = path_1.default.join(process.cwd(), "src/templates", `${template}.hbs`);
    const base = fs_1.default.readFileSync(filePath, "utf-8");
    return handlebars_1.default.compile(base)(data);
};
exports.compile = compile;
class ControlRepositoryClass {
    db;
    constructor(db) {
        this.db = db;
    }
    async userAsistencia(id) {
        try {
            const users = await this.db.estudiantes.findMany({
                where: {
                    personas: { users: { roles: { name: "Estudiante" } } },
                },
                select: {
                    personas: {
                        select: { nombre: true, estudiantes: { select: { id: true } } },
                    },
                },
            });
            if (!users)
                return { data: "", ok: false, status: 400 };
            const admZip = new adm_zip_1.default();
            const urls = [];
            users.forEach((user) => {
                urls.push({
                    name: user.personas.nombre,
                    qr: `https://b131d3805f8dbc.lhr.life/api/control/asistencia/${user.personas.estudiantes?.id}`,
                });
            });
            const browser = await puppeteer_1.default.launch({ headless: true });
            const page = await browser.newPage();
            for (let index = 0; index < urls.length; index++) {
                const pathImage = path_1.default.join(process.cwd(), `src/uploads/${urls[index].name}.jpg`);
                const qr = await qrcode_1.default.toDataURL(urls[index].qr);
                const html = (0, exports.compile)("index", { link: qr, name: urls[index].name });
                await page.setContent(html);
                await page.screenshot({ path: pathImage, quality: 100, clip: { height: 200, width: 200, x: 0, y: 0 } });
                const image = fs_1.default.readFileSync(pathImage);
                admZip.addFile(`${urls[index].name}.jpg`, image);
                fs_1.default.unlinkSync(pathImage);
            }
            await browser.close();
            return {
                data: admZip.toBuffer(),
                ok: true,
                status: 200
            };
        }
        catch (error) {
            return {
                data: error,
                ok: false,
                status: 404,
            };
        }
    }
    async userAsistenciaQuery(ids) {
        try {
            const users = await this.db.estudiantes.findMany({
                where: {
                    personas: { users: { AND: [{ roles: { name: "Estudiante" } }, { id: { in: ids } }] } }
                },
                select: {
                    personas: {
                        select: { nombre: true, estudiantes: { select: { id: true } } },
                    },
                },
            });
            if (!users)
                return { data: "", ok: false, status: 400 };
            const admZip = new adm_zip_1.default();
            const urls = [];
            users.forEach((user) => {
                urls.push({
                    name: user.personas.nombre,
                    qr: `https://b131d3805f8dbc.lhr.life/api/control/asistencia/${user.personas.estudiantes?.id}`,
                });
            });
            const browser = await puppeteer_1.default.launch({ headless: true });
            const page = await browser.newPage();
            for (let index = 0; index < urls.length; index++) {
                const pathImage = path_1.default.join(process.cwd(), `src/uploads/${urls[index].name}.jpg`);
                const qr = await qrcode_1.default.toDataURL(urls[index].qr);
                const html = (0, exports.compile)("index", { link: qr, name: urls[index].name });
                await page.setContent(html);
                await page.screenshot({ path: pathImage, quality: 100, clip: { height: 200, width: 200, x: 0, y: 0 } });
                const image = fs_1.default.readFileSync(pathImage);
                admZip.addFile(`${urls[index].name}.jpg`, image);
                fs_1.default.unlinkSync(pathImage);
            }
            await browser.close();
            return {
                data: admZip.toBuffer(),
                ok: true,
                status: 200
            };
        }
        catch (error) {
            return {
                data: error,
                ok: false,
                status: 404,
            };
        }
    }
    async asistencia(body, param) {
        try {
            if (param["estudianteId"]) {
                const id = param["estudianteId"];
                const user = await this.db.estudiantes.findUnique({
                    where: { id: Number(id) },
                });
                if (!user) {
                    return { data: "Error", ok: false, status: 400 };
                }
                await this.db.asistencia.create({
                    data: {
                        fechaingreso: new Date(),
                        entrada_id: 0,
                        estado_id: 1,
                        estudiante_id: user.id,
                    },
                });
                return { data: "OK", ok: true, status: 200 };
            }
            const { identificacion, ...restData } = body;
            const estudiante = await this.db.estudiantes.findMany({
                where: { personas: { identificacion: identificacion } },
            });
            await this.db.asistencia.create({
                data: {
                    fechaingreso: new Date(),
                    entrada_id: 0,
                    estado_id: 1,
                    estudiante_id: estudiante[0].id,
                    ...restData,
                },
            });
            return { data: "OK", ok: true, status: 200 };
        }
        catch (error) {
            return { data: error, ok: true, status: 400 };
        }
    }
}
exports.ControlRepositoryClass = ControlRepositoryClass;
//# sourceMappingURL=control.repository.js.map