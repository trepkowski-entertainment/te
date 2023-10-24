
import styles from './modalAgencyAbout.module.scss'


const ModalAgencyAbout = ( {modalTitle, modalDes, onClose} ) => {

    return(
        <div className={styles.aboutOverlay}>
            <div className={styles.aboutOverlay__content}>
                <button onClick={onClose}>close</button>
                <h3>{modalTitle}</h3>
                <p>{modalDes}</p>
            </div>

        </div>
    )


}
export default ModalAgencyAbout