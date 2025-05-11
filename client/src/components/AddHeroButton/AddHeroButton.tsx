import styles from "./AddHeroButton.module.scss";

const AddHeroButton = ({
  setIsCreating,
}: {
  setIsCreating: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button className={styles.addButton} onClick={() => setIsCreating(true)}>
      Add new hero
    </button>
  );
};

export default AddHeroButton;
