
import styles from './modalCard.module.scss'

export const ModalCard = ({ onClose, modalTitle, modalDescription}) => {
    return (
        <div className={styles.modalCard__overlay}>
          <div className={styles.modalCard__content}>
            <h3 className={styles.modalCard__h3}>{modalTitle}</h3>
            <p className={styles.modalCard__p}>{modalDescription}</p>
            <div className={styles.modalCard__divBtn}>
              <button className={styles.modalCard__btn} onClick={onClose}>Zamknij</button>
            </div>
          </div>
        </div>
      );
}
