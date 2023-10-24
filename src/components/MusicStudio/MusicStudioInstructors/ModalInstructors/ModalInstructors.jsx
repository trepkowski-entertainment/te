
import styles from './modalInstructors.module.scss'

export const ModalInstructors = ({ onClose, note, live}) => {
    return (
        <div className={styles.modalCard__overlay}>
          <div className={styles.modalCard__content}>
            <h3 className={styles.modalCard__h3}>{note}</h3>
            <p className={styles.modalCard__p}>{live}</p>
            <div className={styles.modalCard__divBtn}>
              <button className={styles.modalCard__btn} onClick={onClose}>Zamknij</button>
            </div>
          </div>
        </div>
      );
}
