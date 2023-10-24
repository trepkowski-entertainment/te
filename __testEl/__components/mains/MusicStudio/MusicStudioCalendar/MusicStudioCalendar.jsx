import styles from './musicStudioCalendar.module.scss'

export const MusicStudioCalendar = () => {

    return(
        <div className={styles.calendar}>
            <div className={styles.calendar__div}>
                <div className={styles.calendar__title}>
                    <h4>Semestr Wiosenny</h4>
                    <p>wrzesień - styczeń</p>
                </div>
                <div className={styles.calendar__recrut}>
                    <h5>Zgłoszenia</h5>
                    <p>cały sezon</p>
                </div>
                <div className={styles.calendar__lesson}>
                    <h5>Zajęcia</h5>
                    <p>wrzesień - styczeń</p>
                </div>
            </div>
        </div>
    )
}