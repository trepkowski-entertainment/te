import styles from './contactCard.module.scss'


export const ContactCard = ({ children }) => {
    return(
        <div className={styles.contactCard}>
            {children}
        </div>
    )
}