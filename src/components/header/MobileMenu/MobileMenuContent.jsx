import styles from './mobileMenu.module.scss'
import { Link } from 'react-router-dom'

export const MobileMenuContent =  ({onClose}) => {
    return(
        <div>
            <div className={styles.modalOverlay}>
                <div className={styles.modalContent}> 
                <ul className={styles.head__menuList}>
                    <li><Link to="/" onClick={onClose}>Strona główna</Link></li>
                    <li onClick={onClose}><a href='#contactOffice'>Kontakt biuro</a></li>
                    <li onClick={onClose}><a href='#contactStudio'>Kontakt Music Studio</a></li>
                    <li><Link to="/squad" onClick={onClose}>Nasza ekipa</Link></li>
                </ul>
                <button onClick={onClose}>Zamknij</button>
                </div> 
            </div>
        </div>         
    )
}




          
