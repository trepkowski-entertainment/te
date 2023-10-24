import agencyServData from './../../assets/data/agencyServices.json'
import styles from './agencyServices.module.scss'


const AgencyServices = () => {

    return(
        <div className={styles.services}>
            <ul className={styles.services__box}>
                {agencyServData.map((item) => (
                    <li className={styles.services__box__element}>
                        <h3 className={styles.services__box__element__title}>{item.title}</h3>
                        <p className={styles.services__box__element__paragraf}>{item.paragraf}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default AgencyServices