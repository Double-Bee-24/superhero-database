import { Link } from "react-router-dom";
import { ISuperhero } from "../../interfaces/ISuperhero";
import styles from "./SuperheroCard.module.scss";
import { DEFAULT_HERO_IMAGE, IMAGE_BASE_URL } from "../../constants/variables";

type Props = {
  hero: ISuperhero;
  onDelete: (id: number) => void;
};

const SuperheroCard = ({ hero, onDelete }: Props) => {
  const previewImage = hero.images?.length
    ? `${IMAGE_BASE_URL}${hero.images[0]}`
    : DEFAULT_HERO_IMAGE;

  return (
    <Link to={`/superhero/${hero.id}`} className={styles.link}>
      <li className={styles.card}>
        <div className={styles.images}>
          <img
            src={previewImage}
            alt={`${hero.nickname} image`}
            className={styles.image}
          />
        </div>
        <h2 className={styles.nickname}>{hero.nickname}</h2>
        <button
          className={styles.removeButton}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onDelete(hero.id ?? 0);
          }}
        >
          Remove Hero
        </button>
      </li>
    </Link>
  );
};

export default SuperheroCard;
