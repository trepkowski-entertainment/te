

import { useState } from 'react'
import styles from './../contactCard.module.scss'

import { ModalForm } from '../ModalForm/ModalForm'



export const ContactOffice = ({ name, email, tel, add, form, btnFormName, formSrc}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }


    return(
        <div className={styles.contactDiv}>
            <h3>{name}</h3>
            <div>
                <p>Email: {email}</p>
                <p>Tel: {tel}</p>
                <p>{add}</p>
                <p>{form}</p>
            </div>
         
            <button className={styles.btnForm} onClick={handleOpenModal}>{btnFormName}</button>

            {isModalOpen && (
            <ModalForm onClose={handleCloseModal}>
            <button onClick={handleCloseModal}>Zamknij</button>

                <iframe
                    src={formSrc} // Wstaw tutaj link do formularza Google
                    title="Formularz kontaktowby"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                ></iframe>
            </ModalForm>)}
        </div>
    )
}