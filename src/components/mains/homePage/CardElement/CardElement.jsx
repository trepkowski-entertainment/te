import styles from './cardElement.module.scss'
import { useState } from 'react';
import { ModalCard } from './ModalCard/ModalCard';

export const CardElement = ({title, subtitle, paragraf, parLi1, parLi2, parLi3, head, modalTitle, modalDescription}) => {


  const inlineStyles = {
    // position: 'relative'


  }

  const afterStyles = {
    // position: 'absolute',
    // content: '',
    // width: '80%',
    // height: '80px',
    // backgroundColor: 'red',
    // bottom: '20px',

    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',





    

  }

const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
    return(
        <div style={inlineStyles} className={styles.cardElementDiv}>
          <div className={styles.cardElementDiv__content}>
            <div style={afterStyles} className={styles.cardElementDiv__divH3}>
              <h3 className={styles.cardElementDiv__h3}>{title}</h3>
            </div>
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