

import { useState } from 'react'
import styles from './../contactCard.module.scss'

import { ModalForm } from '../ModalForm/ModalForm'




export const ContactOffice = ({ header, name, email, tel, telto, btnFormName, formSrc, aPar1, aPar2, aPar3, aPar4, timeP1, timeP2, timeP3, timeP4}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    


    return(
        <div className={styles.contactDiv}>
            <div className={styles.contactDiv__divH3}>
            <h3 className={styles.contactDiv__h3}>{header}</h3>
            </div>
            <div className={styles.contactDiv__divName}>
                <h4 className={styles.contactDiv__h4}>{name}</h4>
                <p className={styles.contactDiv__paragraf}>{aPar1}</p>
                <p className={styles.contactDiv__paragraf}>{aPar2}</p>
                <p className={styles.contactDiv__paragraf}>{aPar3}</p>
                <p className={styles.contactDiv__paragraf}>{aPar4}</p>
            </div>
            <div className={styles.contactDiv__divTime}>
                <h4 className={styles.contactDiv__h4}>{timeP1}</h4>
                <p className={styles.contactDiv__paragraf}>{timeP2}</p>
                <h4 className={styles.contactDiv__h4}>{timeP3}</h4>
                <p className={styles.contactDiv__paragraf}>{timeP4}</p>
            </div>
            <div className={styles.contactDiv__divContact}>
                <p className={styles.contactDiv__paragraf}>
                    <a className={styles.contactDiv__link}
                    href={`tel: ${telto}`}>{tel}</a>
                </p>
                <p className={styles.contactDiv__paragraf}>
                    <a className={styles.contactDiv__link}
                    href={`mailto: ${email}`}>{email}</a>
                </p>
                
            </div>
         
            <button className={styles.btnForm} onClick={handleOpenModal}>{btnFormName}</button>

            {isModalOpen && (
            <ModalForm onClose={handleCloseModal}>
            <button className={styles.btnFormClose} onClick={handleCloseModal}>Zamknij/Wróć</button>

                <iframe
                    src={formSrc} // Wstaw tutaj link do formularza Google
                    title="Formularz kontaktowby"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                ></iframe>
            </ModalForm>
            )}
        </div>
    )
}