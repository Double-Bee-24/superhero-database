import { useState } from "react";
import { ISuperheroForm } from "../../interfaces/ISuperheroForm";
import { ISuperhero } from "../../interfaces/ISuperhero";
import ActionButtons from "../ActionButtons/ActionButtons";
import styles from "./SuperheroForm.module.scss";
import {
  updateSuperhero,
  createSuperhero,
} from "../../services/superheroService";
import ImageUploader from "../ImageUploader/ImageUploader";
import SuperheroField from "../SuperheroField/SuperheroField";
import { useForm } from "react-hook-form";
import { DEFAULT_SUPERHERO } from "../../constants/variables";
import { uploadSuperheroImages } from "../../services/imageService";

const SuperheroForm = ({
  id,
  superhero,
  setSuperhero,
  setIsEditing,
  fieldsToDisplay,
}: ISuperheroForm) => {
  const [isSaving, setIsSaving] = useState(false);

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm<ISuperhero>({
    defaultValues: id ? superhero : DEFAULT_SUPERHERO,
  });

  const [newImages, setNewImages] = useState<File[]>([]);

  const onSubmit = async (data: ISuperhero) => {
    try {
      setIsSaving(true);

      let result: ISuperhero;

      if (!id) {
        result = await createSuperhero(data);
      } else {
        result = await updateSuperhero(+id, data);
      }

      if (newImages.length > 0 && result.id) {
        await uploadSuperheroImages(result.id, newImages);
        setNewImages([]);
      }

      if (setSuperhero) setSuperhero(result);
      reset(result);
      setIsEditing(false);
      window.location.reload();
    } catch (err) {
      console.error("Failed to save superhero", err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    if (isDirty) {
      if (
        window.confirm(
          "You have unsaved changes. Are you sure you want to discard them?"
        )
      ) {
        reset(superhero);
        setIsEditing(false);
      }
    } else {
      setIsEditing(false);
    }
  };

  // Dynamically create fields based on the fieldsToDisplay prop
  const superheroFields = fieldsToDisplay.map((field) => (
    <SuperheroField key={field} field={field} register={register} />
  ));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formHeader}>
        <input
          {...register("nickname", {
            required: "Nickname is required",
            minLength: {
              value: 2,
              message: "Nickname must be at least 2 characters",
            },
          })}
          className={styles.titleInput}
          placeholder="Superhero Nickname"
        />
      </div>

      <div className={styles.card}>{superheroFields}</div>

      <ImageUploader
        id={id || ""}
        images={superhero.images}
        setSuperhero={setSuperhero || (() => {})}
        reset={reset}
        onNewImagesChange={setNewImages}
      />

      {/** Save and cancel buttons and related logic */}
      <ActionButtons
        isSaving={isSaving}
        isDirty={isDirty}
        handleCancel={handleCancel}
      />
    </form>
  );
};

export default SuperheroForm;
