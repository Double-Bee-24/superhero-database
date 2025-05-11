import { UseFormRegister } from "react-hook-form";
import { ISuperhero } from "../../interfaces/ISuperhero";
import styles from "./SuperheroField.module.scss";

type Props = {
  field: keyof ISuperhero;
  register: UseFormRegister<ISuperhero>;
  error?: string;
};

const SuperheroField = ({ field, register, error }: Props) => {
  const label = field
    .replace("_", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <div className={styles.field}>
      <label htmlFor={field} className={styles.fieldLabel}>
        {label}:
      </label>
      <textarea
        id={field}
        {...register(field, {
          required: `${label} is required`,
        })}
        className={styles.input}
        placeholder={`Enter ${label}`}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
export default SuperheroField;
