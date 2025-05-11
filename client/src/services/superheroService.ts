import { instance as apiClient } from "../api/axiosConfig";
import { ISuperhero } from "../interfaces/ISuperhero";
import { IGetSuperheroResponse } from "../interfaces/IGetSuperheroResponse";
import { ICreateSuperheroDto } from "../interfaces/ICreateSuperheroDto";
import { IUpdateSuperheroDto } from "../interfaces/IUpdateSuperheroDto";

const getSuperheroes = async (
  page: number = 1,
  limit: number = 5
): Promise<IGetSuperheroResponse> => {
  try {
    const response: IGetSuperheroResponse = await apiClient.get("/superhero", {
      params: { page, limit },
    });
    return response;
  } catch (error) {
    console.error("Error during getSuperheroes:", error);

    return {
      page,
      limit,
      result: [],
      total: 0,
    };
  }
};

const getSuperheroById = async (id: number | string): Promise<ISuperhero> => {
  const response: ISuperhero = await apiClient.get(`/superhero/${id}`);
  return response;
};

const createSuperhero = async (
  data: ICreateSuperheroDto
): Promise<ISuperhero> => {
  const response: ISuperhero = await apiClient.post("/superhero", data);

  console.log(response);
  return response;
};

const updateSuperhero = async (
  id: number,
  data: IUpdateSuperheroDto
): Promise<ISuperhero> => {
  try {
    const response: ISuperhero = await apiClient.patch(
      `/superhero/${id}`,
      data
    );

    return response;
  } catch (error) {
    console.error("Error during updateSuperhero: ", error);

    return {
      nickname: "error",
      real_name: "error",
      origin_description: "error",
      superpowers: "error",
      catch_phrase: "error",
      images: [],
    };
  }
};

const deleteSuperhero = async (id: number): Promise<void> => {
  try {
    const response = await apiClient.delete(`/superhero/${id}`);

    console.log("Superhero deleted successfully:", response);
  } catch (error) {
    console.error("Error during deleteSuperhero: ", error);
  }
};

export {
  getSuperheroes,
  getSuperheroById,
  createSuperhero,
  updateSuperhero,
  deleteSuperhero,
};
