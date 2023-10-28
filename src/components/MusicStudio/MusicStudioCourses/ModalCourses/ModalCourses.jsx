
import styles from './modalCourses.module.scss'

export const ModalCourses = ({ 
  onClose, 
  modalTitle, modalContent, modalPrice, 
  pack1, hours1, cost1,
  pack2, hours2, cost2, 
  pack3, hours3, cost3, 
  pack4, hours4, cost4, 
  pack5, hours5, cost5, 
  pack6, hours6, cost6, 
  pack7, hours7, cost7, 
  pack8, hours8, cost8 }) => {
    return (
        <div className={styles.modalCourses__overlay}>
          <div className={styles.modalCourses__content}>
            
            <p>ilość godzin, czas trwania, przedmioty, zasady, cennik </p>
            <h3 className={styles.modalCard__h3}>{modalTitle}</h3>
            <p className={styles.modalCard__p}>{modalContent}</p>
            <h4 className={styles.modalCard__p}>{modalPrice}</h4>
            <ul>
              <li>{pack1}</li>
              <li>{hours1}</li>
              <li>{cost1}</li>
            </ul>
            <ul>
              <li>{pack2}</li>
              <li>{hours2}</li>
              <li>{cost2}</li>
            </ul>
            <ul>
              <li>{pack3}</li>
              <li>{hours3}</li>
              <li>{cost3}</li>
            </ul>
            <ul>
              <li>{pack4}</li>
              <li>{hours4}</li>
              <li>{cost4}</li>
            </ul>
            <ul>
              <li>{pack5}</li>
              <li>{hours5}</li>
              <li>{cost5}</li>
            </ul>
            <ul>
              <li>{pack6}</li>
              <li>{hours6}</li>
              <li>{cost6}</li>
            </ul>
            <ul>
              <li>{pack7}</li>
              <li>{hours7}</li>
              <li>{cost7}</li>
            </ul>
            <ul>
              <li>{pack8}</li>
              <li>{hours8}</li>
              <li>{cost8}</li>
            </ul>
            <div className={styles.modalCourses__divBtn}>
              <button className={styles.modalCourses__btn} onClick={onClose}>Zamknij</button>
            </div>
          </div>
        </div>
      );
}
