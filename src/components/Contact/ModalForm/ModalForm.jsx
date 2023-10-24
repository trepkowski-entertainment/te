
import styles from './modalForm.module.scss'

export const ModalForm = ({children }) => {
    return (
      <div className={styles.modalFormOverlay}>
        <div className={styles.modalFormContent}>
          {children}
        </div>
      </div>
    );
  };