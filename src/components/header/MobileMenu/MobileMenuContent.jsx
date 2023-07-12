import styles from './mobileMenu.module.scss'
import { Link } from 'react-router-dom'

export const MobileMenuContent =  ({onClose}) => {
    return(
        <div>
            <div className={styles.modalOverlay}>
                <div className={styles.modalContent}> 
                    <div className={styles.menuLogo}>

                    </div>
                    <ul className={styles.head__menuList}>
                        <li><Link className={styles.head__menuListLink} to="/" onClick={onClose}>Strona główna</Link></li>
                        <li onClick={onClose}><a className={styles.head__menuListLink} href='#contactOffice'>Kontakt biuro</a></li>
                        <li onClick={onClose}><a className={styles.head__menuListLink} href='#contactStudio'>Kontakt Music Studio</a></li>
                        <li><Link className={styles.head__menuListLink} to="/squad" onClick={onClose}>Nasza ekipa</Link></li>
                    </ul>
                    <button className={styles.head__menuBtn} onClick={onClose}>Zamknij</button>
                </div> 
            </div>
        </div>         
    )
}




          
