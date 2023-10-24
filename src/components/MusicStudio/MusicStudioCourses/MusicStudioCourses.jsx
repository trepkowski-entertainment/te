import styles from './musicStudioCourses.module.scss'

import musicStudioCourses from './../../../assets/data/musicStudioCourses.json'
import { useState } from 'react'
import { ModalCourses } from './ModalCourses/ModalCourses'



export const MusicStudioCourses = () => {

    const [modalCourses, setModalCourses] = useState(false)

    const openModalCours = () => {
        setModalCourses(true)
    }
    const closeModalCours = () => {
        setModalCourses(false)
    }



     return(
        <div className={styles.courses}>
            {musicStudioCourses.map((item) => (
                <div className={styles.courses__content}>
                    {/* <img className={styles.courses__img}
                        src={require(`./../icons/${item.svg}`)}
                        alt=''
                    /> */}
                    <div className={styles.courses__about}>
                        <h4>{item.title}</h4>
                        <p>. . .</p>
                        <p>{item.about.line1}</p>
                        <p>{item.about.line2}</p>
                        <p>{item.about.line3}</p>
                        <p>. . .</p>
                        <button className={styles.courses__about__btn} onClick={openModalCours}>Więcej</button>
                    </div>
                    <div>
                        {modalCourses && (
                            <ModalCourses onClose={closeModalCours} />
                        )}

                    </div>

                </div>
             ))}
        </div>
     )
}