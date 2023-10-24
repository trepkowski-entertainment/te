
import styles from './MenuContent.module.scss'
import { Link } from 'react-router-dom'

const MenuContent = ({onClose}) => {
    
    return(
        <div>
            <div className={styles.menu__overlay}>
                <div className={styles.menu__content}>
                    <ul className={styles.head__menuList}>
                        <li><Link className={styles.head__menuListLink} to="/" onClick={onClose}>Strona główna</Link></li>
                        <li><Link className={styles.head__menuListLink} to="/about" onClick={onClose}>O nas</Link></li>
                        <li><Link className={styles.head__menuListLink} to="/artistic-agency" onClick={onClose}>Agencja artystyczna</Link></li>
                        <li><Link className={styles.head__menuListLink} to="/music-studio" onClick={onClose}>Music Studio</Link></li>
                        <li><Link className={styles.head__menuListLink} to="/squad" onClick={onClose}>Nasza ekipa</Link></li>
                        <li><Link className={styles.head__menuListLink} to="/contact" onClick={onClose}>Kontakt</Link></li>
                    </ul>
                    <button className={styles.head__menuBtn} onClick={onClose}>Zamknij</button>
                </div>
            </div>
        </div>
    )
}
export default MenuContent