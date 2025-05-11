import { useParams } from "react-router-dom";
import styles from "./SuperHeroItemPage.module.scss";
import { useEffect, useState } from "react";
import { ISuperhero } from "../../interfaces/ISuperhero";
import { getSuperheroById } from "../../services/superheroService";
import SuperheroForm from "../../components/SuperheroForm/SuperheroForm";
import SuperheroDetails from "../../components/SuperheroDetails/SuperheroDetails";
import {
  EMPTY_SUPERHERO,
  SUPERHERO_FORM_FIELDS,
} from "../../constants/variables";

const SuperHeroItemPage = () => {
  const { id = "" } = useParams<{ id: string }>();
  const [superhero, setSuperhero] = useState<ISuperhero>(EMPTY_SUPERHERO);

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchSuperhero = async () => {
      try {
        const superheroData = await getSuperheroById(id);
        setSuperhero(superheroData);
        // Reset form with fetched data
      } catch (error) {
        console.error("Error fetching superhero:", error);
      }
    };

    fetchSuperhero();
  }, [id]);

  const fieldsToDisplay = SUPERHERO_FORM_FIELDS;

  return (
    <div className={styles.wrapper}>
      {isEditing ? (
        <SuperheroForm
          id={id || ""}
          superhero={superhero}
          setSuperhero={setSuperhero}
          setIsEditing={setIsEditing}
          fieldsToDisplay={fieldsToDisplay}
        />
      ) : (
        <SuperheroDetails
          superhero={superhero}
          fieldsToDisplay={fieldsToDisplay}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default SuperHeroItemPage;
