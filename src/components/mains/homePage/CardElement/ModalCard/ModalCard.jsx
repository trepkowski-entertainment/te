
import styles from './modalCard.module.scss'

export const ModalCard = ({ onClose, modalTitle, modalDescription}) => {
    return (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <p>{modalTitle}</p>
            <p>{modalDescription}</p>
            <button onClick={onClose}>Zamknij</button>
          </div>
        </div>
      );
}
