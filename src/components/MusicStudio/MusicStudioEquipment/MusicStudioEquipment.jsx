import styles from './musicStudioEquipment.module.scss'

import musicStudioEquipment from './../../../assets/data/musicStudioEquipment.json'


export const MusicStudioEquipment = () => {

    return(
        <div className={styles.equipment}>
            {musicStudioEquipment.map((item) => (
                <div className={styles.equipment__div}>
                    <img className={styles.equipment__img} />
                    <p className={styles.equipment__par}>{item.title}</p>
                </div>
            ))}
            
        </div>
    )
}