import { ISuperhero } from "./ISuperhero";

export interface IGetSuperheroResponse {
  limit: number;
  page: number;
  result: ISuperhero[];
  total: number;
}
