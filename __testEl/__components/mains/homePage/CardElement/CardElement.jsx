import styles from './cardElement.module.scss'
import { useState } from 'react';
import { ModalCard } from './ModalCard/ModalCard';
import { Link } from 'react-router-dom';

export const CardElement = ({title, subtitle, paragraf, parLi1, parLi2, parLi3, head, modalTitle, modalDescription, link}) => {




const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
    return(
        <div className={styles.cardElementDiv}>
          <div className={styles.cardElementDiv__content}>
            <div className={styles.cardElementDiv__divH3}>
              <h3 className={styles.cardElementDiv__h3}>{title}</h3>
            </div>
            <h4 className={styles.cardElementDiv__h4}>{subtitle}</h4>
            {/* <p className={styles.cardElementDiv__paragraf}>{paragraf}</p> */}
            <h5 className={styles.cardElementDiv__h5}>{head}</h5>
            {/* <p>{parLi1}</p>
            <p>{parLi2}</p> */}
            <p className={styles.cardElementDiv__parLi3}>
              <span>{parLi1}</span>
              <span>{parLi2}</span>
              <span>{parLi3}</span>
            </p>
            <div>
              <button className={styles.cardElementDiv__btn} onClick={openModal}>Więcej</button>
              <button className={styles.cardElementDiv__btnLink}><Link className={styles.cardElementDiv__link} to={link}>Przejdź do...</Link></button>
              {/* <button className={`${styles.cardElementDiv__btn} ${styles.cardElementDiv__btnLink}`}><Link to={link}>Przejdź do...</Link></button> */}
            </div>
            </div>

            {modalVisible && (
            <ModalCard onClose={closeModal} 
            modalTitle={modalTitle}
            modalDescription={modalDescription}/>)}
          
        </div>
    )
}