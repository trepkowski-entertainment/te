
import styles from './modalCourses.module.scss'

export const ModalCourses = ({ onClose, modalTitle, modalDescription}) => {
    return (
        <div className={styles.modalCourses__overlay}>
          <div className={styles.modalCourses__content}>
            <p>hj jkjkj  jkjhjhg  ghghjg</p>
            {/* <h3 className={styles.modalCard__h3}>{modalTitle}</h3>
            <p className={styles.modalCard__p}>{modalDescription}</p> */}
            <div className={styles.modalCourses__divBtn}>
              <button className={styles.modalCourses__btn} onClick={onClose}>Zamknij</button>
            </div>
          </div>
        </div>
      );
}
