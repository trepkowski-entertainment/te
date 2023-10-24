
import { useState } from 'react'
import styles from './squadCard.module.scss'


export const SquadCard = ({ name, status, desNote, desLive, picSrc, picAlt}) => {
    const [showNote, setShowNote] = useState(false)

    const toggleNote = () => {
        setShowNote(!showNote)

    }


    return(
    <div className={styles.squadCard}>
        <div className={styles.squadCard__div}>
            <img 
                className={styles.squadCard__img}
                src={picSrc}
                alt={picAlt}
            />
            <h3>{name}</h3>
            <h4>{status}</h4>
            <p>{desNote}</p>
            <button className={styles.squadCard__btn} onClick={toggleNote}>
                {!showNote ? 'Rozwiń' : 'Zwiń'}
            </button>
        </div>
        <div className={styles.squadCard__note}>
            {showNote ? (
                <div>
                    <p className={styles.squadCard__noteText}>{desLive}</p>
                </div>
            ) : null}
        </div>
    </div>
    )
    

}