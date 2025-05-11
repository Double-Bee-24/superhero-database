import { ISuperhero } from "../interfaces/ISuperhero";
import { instance as apiClient } from "../api/axiosConfig";

const uploadSuperheroImages = async (
  id: number,
  files: File[]
): Promise<ISuperhero> => {
  const formData = new FormData();
  files.forEach((file) => formData.append("files", file));

  const response: { hero: ISuperhero } = await apiClient.post(
    `/upload/${id}`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );

  return response.hero;
};

const deleteSuperheroImage = async (
  id: number,
  filename: string
): Promise<ISuperhero> => {
  const response: { hero: ISuperhero } = await apiClient.delete(
    `/upload/${id}/image/${filename}`
  );

  return response.hero;
};

export { uploadSuperheroImages, deleteSuperheroImage };
