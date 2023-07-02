import styles from './cards.module.scss'


export const Cards = ({children}) => {
    return(
        <div className={styles.cardsDiv}>
            {children}
        </div>
    )
}