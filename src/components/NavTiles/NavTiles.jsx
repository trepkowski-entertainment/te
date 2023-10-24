import { Link } from "react-router-dom"
import styles from './navTiles.module.scss'

 const NavTiles = () => {
    
    return(
        <nav className={styles.tiles}>
            <ul className={styles.tiles__list}>
                <li><Link className={styles.tiles__link} to={'/artistic-agency'}>
                        <h3>Artistic Agency</h3>
                        <p>Organizacja i oprawa muzyczna uroczystości okolicznościowych</p>
                    </Link>
                </li>
                <li><Link className={styles.tiles__link} to={'/music-studio'}>
                        <h3>Music Studio</h3>
                        <p>Zajęcia i kursy muzyczne online</p>
                    </Link>
                </li>
                <li><Link className={styles.tiles__link} to={'/contact'}>
                        <h3>Kontakt</h3>
                        <p>. . .</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
 }
 export default NavTiles
