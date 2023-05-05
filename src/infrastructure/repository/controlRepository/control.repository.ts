import { PrismaClient } from "@prisma/client";
import { ControlRepository } from "@/domain/control/control.repository";
import {
  ErrorsInterfaces,
  ResponseInterfaces,
} from "@/types/response.interfaces";
import { Ibody } from "@/types/control.interface";
import QRcode from "qrcode";
import puppeteer from "puppeteer";
import hbs from "handlebars";
import fs from "fs";
import path from "path";
import Admzip from "adm-zip";
import { UploadFile } from "../../../config/s3";
import { v4 as uid } from "uuid";

export const compile = (template: string, data: any) => {
  const filePath = path.join(process.cwd(), "src/templates", `${template}.hbs`);

  const base = fs.readFileSync(filePath, "utf-8");
  return hbs.compile(base)(data);
};

export class ControlRepositoryClass implements ControlRepository {
  constructor(private db: PrismaClient) { }

  async userAsistencia(
    id: number
  ): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>> {

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

      if (!users) return { data: "", ok: false, status: 400 };

      const admZip = new Admzip();

      const urls: any[] = [];
      users.forEach((user) => {
        urls.push({
          name: user.personas.nombre,
          qr: `https://b131d3805f8dbc.lhr.life/api/control/asistencia/${user.personas.estudiantes?.id}`,
        });
      });

      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();

      for (let index = 0; index < urls.length; index++) {
        const pathImage = path.join(process.cwd(), `src/uploads/${urls[index].name}.jpg`);
        const qr = await QRcode.toDataURL(urls[index].qr);
        const html = compile("index", { link: qr, name: urls[index].name });
        await page.setContent(html);
        await page.screenshot({ path: pathImage, quality: 100, clip: { height: 200, width: 200, x: 0, y: 0 } });
        const image = fs.readFileSync(pathImage);
        admZip.addFile(`${urls[index].name}.jpg`, image);
        fs.unlinkSync(pathImage)
      }

      admZip.writeZip(path.join(process.cwd(), `src/uploads/a.zip`))
      await browser.close();

      const name = uid();

      await UploadFile(fs.createReadStream(path.join(process.cwd(), `src/uploads/a.zip`)), name)

      fs.unlinkSync(path.join(process.cwd(), `src/uploads/a.zip`))

      return {
        data: "Ok",
        ok: true,
        status: 200
      };
    } catch (error) {
      return {
        data: error,
        ok: false,
        status: 404,
      };
    }
  }

  async userAsistenciaQuery(
    ids: number[]
  ): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>> {

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

      if (!users) return { data: "", ok: false, status: 400 };

      const admZip = new Admzip();

      const urls: any[] = [];
      users.forEach((user) => {
        urls.push({
          name: user.personas.nombre,
          qr: `https://b131d3805f8dbc.lhr.life/api/control/asistencia/${user.personas.estudiantes?.id}`,
        });
      });

      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();

      for (let index = 0; index < urls.length; index++) {
        const pathImage = path.join(process.cwd(), `src/uploads/${urls[index].name}.jpg`);
        const qr = await QRcode.toDataURL(urls[index].qr);
        const html = compile("index", { link: qr, name: urls[index].name });
        await page.setContent(html);
        await page.screenshot({ path: pathImage, quality: 100, clip: { height: 200, width: 200, x: 0, y: 0 } });
        const image = fs.readFileSync(pathImage);
        admZip.addFile(`${urls[index].name}.jpg`, image);
        fs.unlinkSync(pathImage)
      }

      await browser.close();

      return {
        data: admZip.toBuffer(),
        ok: true,
        status: 200
      };
    } catch (error) {
      return {
        data: error,
        ok: false,
        status: 404,
      };
    }
  }

  async asistencia(
    body: Ibody,
    param?: any
  ): Promise<ErrorsInterfaces<any> | ResponseInterfaces<any>> {
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
    } catch (error) {
      return { data: error, ok: true, status: 400 };
    }
  }
}
