
import styles from './loaderStart.module.scss'
import logo from './../header/Logo/logo-te.png'



export const LoaderStart = () => {

   

    return (
        <div className={styles.loadLogoDiv}>
            <img 
                className={styles.loadLogoImg}
                src={logo}
                alt='logo'
                />
        </div>
    )
}