import { deleteSuperheroImage } from "../../services/imageService";
import styles from "./ImageUploader.module.scss";
import { ISuperhero } from "../../interfaces/ISuperhero";
import { IMAGE_BASE_URL } from "../../constants/variables";

interface ImageUploaderProps {
  id: number | string;
  images: string[];
  setSuperhero: (superhero: ISuperhero) => void;
  reset: (superhero: ISuperhero) => void;
  onNewImagesChange: (images: File[]) => void;
}

const ImageUploader = ({
  id,
  images,
  setSuperhero,
  reset,
  onNewImagesChange,
}: ImageUploaderProps) => {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      onNewImagesChange(files);
    }
  };

  const handleDeleteImage = async (imageName: string) => {
    try {
      if (id) {
        const res = await deleteSuperheroImage(+id, imageName);
        setSuperhero(res);
        reset(res);
      }
    } catch (err) {
      console.error("Failed to delete image", err);
    }
  };

  return (
    <div className={styles.imageContainer}>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        className={styles.fileInput}
      />
      <div className={styles.imageGallery}>
        {images.map((img) => (
          <div key={img} className={styles.imageWrapper}>
            <img
              src={`${IMAGE_BASE_URL}${img}`}
              alt="Hero"
              className={styles.image}
            />
            <button
              type="button"
              onClick={() => handleDeleteImage(img)}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
