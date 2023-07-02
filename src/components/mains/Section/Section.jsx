import styles from './section.module.scss'

export const Section = ({ background, children}) => {

    const sectionStyle = {
        backgroundColor: background,
    }


    return(
        <section className={styles.section} style={sectionStyle}>
            {children}
        </section>
    )
}