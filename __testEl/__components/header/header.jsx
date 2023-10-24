
import styles from './header.module.scss'



export const Header = ({children}) => {

    return (
        <div className={styles.head__div}>
            {children}
        </div>
    )
}