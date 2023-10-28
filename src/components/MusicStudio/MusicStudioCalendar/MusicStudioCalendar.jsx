import styles from './musicStudioCalendar.module.scss'

import calendar from './../../../assets/data/musicStudioCalendar.json'

const MusicStudioCalendar = () => {

    return(
        <section className={styles.calendar}>
            <div className={styles.calendar__div}>
                <h3 className={styles.calendar__div__title}>Sezon artystyczny TEMS</h3>
                <div className={styles.calendar__div__cards}>
                    {calendar.map((item) => (
                        <ul className={styles.calendar__div__cards__card}>
                            <li className={styles.calendar__div__cards__card__element}><h4>{item.semestr}</h4></li>
                            <li className={styles.calendar__div__cards__card__element}><p>{item.time}</p></li>
                            <li className={styles.calendar__div__cards__card__element}><p>{item.line1}</p></li>
                            <li className={styles.calendar__div__cards__card__element}><p>{item.line2}</p></li>
                            {/* <li className={styles.calendar__div__cards__card__element}><p>{item.line3}</p></li>
                            <li className={styles.calendar__div__cards__card__element}><p>{item.line4}</p></li>
                            <li className={styles.calendar__div__cards__card__element}><p>{item.line5}</p></li> */}
                        </ul>
                    ))}
                </div>
            </div>
                
            
        </section>
    )
}
export default MusicStudioCalendar
