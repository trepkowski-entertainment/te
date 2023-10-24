import { useState } from "react"
import MenuContent from "./MenuContent/MenuContent"
import styles from './MenuMobile.module.scss'
import menuSvg from './../../assets/icons/bass-clef-vector.jpg'


const MenuMobile = () => {
    
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }


    return(
        <div className={styles.mobile}>
            <button className={styles.mobile__btn} onClick={openModal}>
                <img className={styles.mobile__img} src={menuSvg} alt='logo'/>
            </button>
            {modal && <MenuContent onClose={closeModal}/>}
        </div>
    )
}
export default MenuMobile