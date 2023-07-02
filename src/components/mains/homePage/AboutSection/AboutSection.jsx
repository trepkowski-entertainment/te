
import styles from './aboutSection.module.scss'

export const AboutSection = ({ p1, p2, p3 }) => {


    return(
        <div className={styles.aboutDiv}>
            <h3>About Company</h3>
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
        </div>
    )
}