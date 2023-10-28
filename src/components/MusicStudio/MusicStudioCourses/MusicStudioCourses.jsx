import styles from './musicStudioCourses.module.scss'

import musicStudioCourses from './../../../assets/data/musicStudioCourses.json'
import { useState } from 'react'
import { ModalCourses } from './ModalCourses/ModalCourses'



export const MusicStudioCourses = ({
    title, aboutLine1, aboutLine2, aboutLine3, 
    modalTitle, modalContent, modalPrice, 
    pack1, hours1, cost1, 
    pack2, hours2, cost2, 
    pack3, hours3, cost3, 
    pack4, hours4, cost4, 
    pack5, hours5, cost5, 
    pack6, hours6, cost6, 
    pack7, hours7, cost7, 
    pack8, hours8, cost8}) => {

    const [modalCourses, setModalCourses] = useState(false)

    const openModalCours = () => {
        setModalCourses(true)
    }
    const closeModalCours = () => {
        setModalCourses(false)
    }



     return(
        <div className={styles.courses}>
                <div className={styles.courses__content}>
                    {/* <img className={styles.courses__img}
                        src={require(`./../icons/${item.svg}`)}
                        alt=''
                    /> */}
                    <div className={styles.courses__about}>
                        <h4>{title}</h4>
                        <p>. . .</p>
                        <p>{aboutLine1}</p>
                        <p>{aboutLine2}</p>
                        <p>{aboutLine3}</p>
                        <p>. . .</p>
                        <button className={styles.courses__about__btn} onClick={openModalCours}>Więcej</button>
                    </div>
                    
                        {modalCourses && (
                            <ModalCourses onClose={closeModalCours}
                            modalTitle={modalTitle} 
                            modalContent={modalContent} 
                            modalPrice={modalPrice}
                            pack1={pack1}
                            hours1={hours1}
                            cost1={cost1}
                            pack2={pack2}
                            hours2={hours2}
                            cost2={cost2}
                            pack3={pack3}
                            hours3={hours3}
                            cost3={cost3}
                            pack4={pack4}
                            hours4={hours4}
                            cost4={cost4}
                            pack5={pack5}
                            hours5={hours5}
                            cost5={cost5}
                            pack6={pack6}
                            hours6={hours6}
                            cost6={cost6}
                            pack7={pack7}
                            hours7={hours7}
                            cost7={cost7}
                            pack8={pack8}
                            hours8={hours8}
                            cost8={cost8}
                            />
                        )}

                    

                </div>
        </div>
     )
}