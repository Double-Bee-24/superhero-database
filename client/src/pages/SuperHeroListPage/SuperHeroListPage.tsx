import styles from "./SuperHeroListPage.module.scss";
import Pagination from "../../components/Pagination/Pagination";
import SuperheroForm from "../../components/SuperheroForm/SuperheroForm";
import SuperheroCard from "../../components/SuperheroCard/SuperheroCard";
import {
  EMPTY_SUPERHERO,
  SUPERHERO_FORM_FIELDS,
  SUPERHEROES_PER_PAGE,
} from "../../constants/variables";
import { useSuperheroes } from "../../hooks/useSuperheroes";
import { deleteSuperhero } from "../../services/superheroService";
import { useState } from "react";
import AddHeroButton from "../../components/AddHeroButton/AddHeroButton";

const SuperHeroListPage = () => {
  const [isCreating, setIsCreating] = useState(false);

  const limit = SUPERHEROES_PER_PAGE;

  const { superheroes, page, setPage, total, refetch } = useSuperheroes(limit);

  const superheroListItems = superheroes.map((hero) => (
    <SuperheroCard
      key={hero.id}
      hero={hero}
      onDelete={async (id) => {
        await deleteSuperhero(id);
        await refetch();
      }}
    />
  ));

  const totalPages = Math.ceil(total / limit);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Superhero List</h1>
      <ul className={styles.list}>{superheroListItems}</ul>
      {isCreating ? (
        <SuperheroForm
          id={undefined}
          superhero={EMPTY_SUPERHERO}
          setIsEditing={setIsCreating}
          fieldsToDisplay={SUPERHERO_FORM_FIELDS}
        />
      ) : (
        <AddHeroButton setIsCreating={setIsCreating} />
      )}
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

export default SuperHeroListPage;
