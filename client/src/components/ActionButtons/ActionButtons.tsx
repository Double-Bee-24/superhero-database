import styles from "./ActionButtons.module.scss";

const ActionButtons = ({
  isSaving,
  isDirty,
  handleCancel,
}: {
  isSaving: boolean;
  isDirty: boolean;
  handleCancel: () => void;
}) => {
  return (
    <div className={styles.actionButtons}>
      <button
        type="submit"
        disabled={isSaving || !isDirty}
        className={styles.saveButton}
      >
        {isSaving ? "Saving..." : "Save"}
      </button>
      <button
        type="button"
        onClick={handleCancel}
        disabled={isSaving}
        className={styles.cancelButton}
      >
        Cancel
      </button>
    </div>
  );
};

export default ActionButtons;
