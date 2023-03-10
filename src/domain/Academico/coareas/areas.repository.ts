import { AreaEntity } from "./areas.entity";
import {
  ErrorsInterfaces,
  ResponseInterfaces,
} from "../../../types/response.interfaces";
export interface AreasRepository {
  findAllAreas(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  createAreasP(): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  storeAreas(
    body: AreaEntity
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  showArea(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  updatedArea(
    body: AreaEntity,
    id: number
  ): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  showArea(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  showAreaEdit(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
  deleteArea(id: number): Promise<ResponseInterfaces<any> | ErrorsInterfaces<any>>;
}
