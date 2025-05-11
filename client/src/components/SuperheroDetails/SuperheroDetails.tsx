import { ISuperheroDetails } from "../../interfaces/ISuperheroDetails";
import { formatFieldName } from "../../utils/stringUtils";
import ImagesContainer from "../ImagesContainer/ImagesContainer";
import styles from "./SuperheroDetails.module.scss";

const SuperheroDetails = ({
  superhero,
  fieldsToDisplay,
  setIsEditing,
}: ISuperheroDetails) => {
  // Fields of the superhero, e.g. "real_name", "superpowers", etc.
  const fields = fieldsToDisplay.map((field) => (
    <div key={field} className={styles.field}>
      <strong className={styles.fieldLabel}>{formatFieldName(field)}:</strong>
      <p className={styles.fieldValue}>{superhero[field]}</p>
    </div>
  ));

  return (
    <>
      <h2 className={styles.title}>{superhero.nickname}</h2>
      <div className={styles.card}>{fields}</div>
      <div className={styles.actionButtons}></div>
      <ImagesContainer
        images={superhero.images}
        nickname={superhero.nickname}
      />
      <div className={styles.editButtonContainer}>
        <button
          onClick={() => setIsEditing(true)}
          className={styles.editButton}
        >
          Edit
        </button>
      </div>
    </>
  );
};

export default SuperheroDetails;
