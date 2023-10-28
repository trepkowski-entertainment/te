import agencyServData from './../../assets/data/agencyServices.json'
import styles from './agencyServices.module.scss'


const AgencyServices = () => {

    return(
        <div className={styles.services}>
            <ul className={styles.services__box}>
                {agencyServData.map((item) => (
                    <li className={styles.services__box__element}>
                        <h3 className={styles.services__box__element__title}>{item.title}</h3>
                        <div className={styles.services__box__element__title__overlay}>
                            <p className={styles.services__box__element__title__overlay__paragraf}>{item.paragraf}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default AgencyServices