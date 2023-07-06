import styles from './cardElement.module.scss'
import { useState } from 'react';
import { ModalCard } from './ModalCard/ModalCard';

export const CardElement = ({title, subtitle, paragraf, parLi1, parLi2, parLi3, head, modalTitle, modalDescription}) => {

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
            <h3 className={styles.cardElementDiv__h3}>{title}</h3>
            <h4 className={styles.cardElementDiv__h4}>{subtitle}</h4>
            <p className={styles.cardElementDiv__paragraf}>{paragraf}</p>
            <h5>{head}</h5>
            <p>{parLi1}</p>
            <p>{parLi2}</p>
            <p className={styles.cardElementDiv__parLi3}>{parLi3}</p>
            <button className={styles.cardElementDiv__btn} onClick={openModal}>Więcej</button>
          </div>

            {modalVisible && (
            <ModalCard onClose={closeModal} 
            modalTitle={modalTitle}
            modalDescription={modalDescription}/>)}
      
        </div>
    )
}