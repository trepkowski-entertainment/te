
import styles from './modalCourses.module.scss'

export const ModalCourses = ({ onClose, modalTitle, modalDescription}) => {
    return (
        <div className={styles.modalCourses__overlay}>
          <div className={styles.modalCourses__content}>
            <p>hj jkjkj  jkjhjhg  ghghjg</p>
            <p> Kurs wokalno-aktorski (Vocal Artist - Vocal Academy): 
              Nasz kurs łączy naukę śpiewu z umiejętnościami aktorskimi. 
              Oferujemy wszechstronne podejście do rozwoju artystycznego, 
              ucząc, jak wyrazić emocje w muzyce i na scenie.</p>
            <p>Kurs wokalny (Vocal Course - Vocal Experience): 
              Nasz kurs wokalny skupia się wyłącznie na nauce śpiewu. 
              Nasi instruktorzy pomogą Ci rozwijać twój wokal, 
              doskonalić technikę i wyrażać siebie przez muzykę.</p>
            <p>Pakiety zajęć indywidualnych (Simple Vocal Plan): 
                Dla uczniów o różnych potrzebach oferujemy pakiety zajęć indywidualnych. 
                Możesz wybrać przedmioty i techniki, które Cię interesują, 
                a nasi instruktorzy dostosują program do Twoich oczekiwań.
            </p>
            <p>ilość godzin, czas trwania, przedmioty, zasady, cennik </p>
            {/* <h3 className={styles.modalCard__h3}>{modalTitle}</h3>
            <p className={styles.modalCard__p}>{modalDescription}</p> */}
            <div className={styles.modalCourses__divBtn}>
              <button className={styles.modalCourses__btn} onClick={onClose}>Zamknij</button>
            </div>
          </div>
        </div>
      );
}
