import { Dispatch, SetStateAction } from "react";
import { ISuperhero } from "./ISuperhero";

export interface ISuperheroDetails {
  superhero: ISuperhero;
  fieldsToDisplay: Array<keyof ISuperhero>;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}
