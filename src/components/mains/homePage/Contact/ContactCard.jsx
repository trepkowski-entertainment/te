import styles from './contactCard.module.scss'


export const ContactCard = ({ children }) => {
    return(
        <div id='contactCardSection' className={styles.contactCard}>
            {children}
        </div>
    )
}