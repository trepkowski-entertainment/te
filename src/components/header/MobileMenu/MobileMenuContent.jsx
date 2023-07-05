import styles from './mobileMenu.module.scss'
import { Link } from 'react-router-dom'

export const MobileMenuContent =  ({onClose}) => {
    return(
        <div>
            <div className={styles.modalOverlay}>
                <div className={styles.modalContent}> 
                <ul className={styles.head__menuList}>
                    <li><Link to="/" onClick={onClose}>0000</Link></li>
                    <li><p>opoopo</p></li>
                    <li><p>opoopo</p></li>
                </ul>
                <button onClick={onClose}>Zamknij</button>
                </div> 
            </div>
        </div>         
    )
}




          
