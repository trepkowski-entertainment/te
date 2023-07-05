
import styles from './aboutSection.module.scss'

export const AboutSection = ({ p1, p2, p3 }) => {


    return(
        <div className={styles.aboutDiv}>
            <h3 className={styles.aboutDiv__h3}>O nas</h3>
            <p className={styles.aboutDiv__p}>{p1}</p>
            <p className={styles.aboutDiv__p}>{p2}</p>
            <p className={styles.aboutDiv__p}>{p3}</p>
        </div>
    )
}