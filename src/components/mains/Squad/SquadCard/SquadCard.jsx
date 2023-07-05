import { Link, Outlet } from 'react-router-dom'
import styles from './squadCard.module.scss'


export const SquadCard = ({ name, status, descNote, picSrc, picAlt}) => {
    return(
    <div className={styles.squadCard__div}>
        <img 
            className={styles.squadCard__img}
            src={picSrc}
            alt={picAlt}
        />
        <h3>{name}</h3>
        <h4>{status}</h4>
        <p>{descNote}</p>
        <Link to="squad-description">więcej</Link>
        <Outlet />
    </div>
    )
    

}