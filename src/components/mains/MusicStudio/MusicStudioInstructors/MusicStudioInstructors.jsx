
import styles from './musicStudioInstructors.module.scss'
import temsSquad from './../../../data/temsSquad.json'
import { useState } from 'react'
import { ModalInstructors } from './ModalInstructors/ModalInstructors'


export const MusicStudioInstructors = ({name, status, note, live }) => {

    const [ModalViwe, setModalViwe] = useState(false)

    const openModal = () => {
        setModalViwe(true)
    }
    const closeModal = () => {
        setModalViwe(false)
    }

    return(
        <div className={styles.instructors}>
            <div className={styles.instructors__div}>
                <img className={styles.instructors__img}
                     onClick={openModal}

                />
                <p className={styles.instructors__name} onClick={openModal}>{name}</p>
            </div>
            <div className={styles.instructors__textDiv}>
                <p className={styles.instructors__status} onClick={openModal}>{status}</p>
                {/* <button className={styles.instructors__btn} onClick={openModal}>Więcej</button> */}
            </div>

            {ModalViwe && (
                <ModalInstructors 
                onClose={closeModal}
                note={note}
                live={live}/>
            )}
        </div>
    )
}