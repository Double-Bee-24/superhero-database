import { Dispatch, SetStateAction } from "react";
import { ISuperhero } from "./ISuperhero";

export interface ISuperheroForm {
  id?: string;
  superhero: ISuperhero;
  setSuperhero?: React.Dispatch<React.SetStateAction<ISuperhero>>;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  fieldsToDisplay: Array<keyof ISuperhero>;
}
