import styles from './homePage.module.scss'

export const HomePage = ({children}) => {
    return(
        <div className={styles.home}>
            {children}
        </div>
    )
}