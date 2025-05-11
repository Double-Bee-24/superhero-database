import { DEFAULT_HERO_IMAGE, IMAGE_BASE_URL } from "../../constants/variables";
import styles from "./ImagesContainer.module.scss";

const ImagesContainer = ({
  images,
  nickname,
}: {
  images: string[];
  nickname: string;
}) => {
  // Process image URLs and display all images or a default one
  const imageElements =
    images && images.length > 0 ? (
      images.map((image, index) => {
        const imageUrl = `${IMAGE_BASE_URL}${image}`;

        return (
          <img
            key={index}
            src={imageUrl}
            alt={`${nickname} image ${index + 1}`}
            className={styles.image}
          />
        );
      })
    ) : (
      <img
        src={`/${DEFAULT_HERO_IMAGE}`}
        alt="Default superhero image"
        className={styles.image}
      />
    );

  return (
    <>
      <h3 className={styles.imagesTitle}>Images</h3>
      <div className={styles.imagesWrapper}>{imageElements}</div>
    </>
  );
};

export default ImagesContainer;
