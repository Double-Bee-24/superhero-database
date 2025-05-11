import { ISuperhero } from "../interfaces/ISuperhero";

const SUPERHEROES_PER_PAGE = 5;

const IMAGE_BASE_URL = "http://localhost:4000/uploads/";
const DEFAULT_HERO_IMAGE = "superhero.png";

const EMPTY_SUPERHERO: ISuperhero = {
  nickname: "",
  real_name: "",
  origin_description: "",
  superpowers: "",
  catch_phrase: "",
  images: [],
};

const DEFAULT_SUPERHERO: ISuperhero = {
  nickname: "Batman",
  real_name: "Bruce Wayne",
  origin_description: "A rich guy",
  superpowers: "None",
  catch_phrase: "I am Vengeance. I am the Night. I am Batman!",
  images: [],
};

const SUPERHERO_FORM_FIELDS: (keyof ISuperhero)[] = [
  "real_name",
  "origin_description",
  "superpowers",
  "catch_phrase",
];

export {
  SUPERHEROES_PER_PAGE,
  EMPTY_SUPERHERO,
  SUPERHERO_FORM_FIELDS,
  IMAGE_BASE_URL,
  DEFAULT_HERO_IMAGE,
  DEFAULT_SUPERHERO,
};
