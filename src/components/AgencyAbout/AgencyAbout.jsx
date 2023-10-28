import { useState } from "react"
import ModalAgencyAbout from "./ModalAgencyAbout/ModalAgencyAbout"

import styles from './agencyAbout.module.scss' 

const AgencyAbout = ( {title, des, modalTitle, modalDes} ) => {

    const [modal, setModal] = useState(false)

    
    const OpenModal =() => {
        setModal(true)
    }
    const closeModal =() => {
        setModal(false)
    }

    return(
        <div className={styles.about}>
            <ul className={styles.about__box}>
                <li className={styles.about__box__element}>
                    <div className={styles.about__box__element__div}>
                        <h3 className={styles.about__box__element__title}>{title}</h3>
                        <p className={styles.about__box__element__des}>{des}</p>
                        <button className={styles.about__box__element__btn} onClick={OpenModal}>wiecej</button>      
                    </div>
                </li>
            </ul> 

            {modal && 
            (<ModalAgencyAbout 
                modalTitle={modalTitle}
                modalDes={modalDes}
                onClose={closeModal}
            />)}     
        </div>
    )

}
export default AgencyAbout