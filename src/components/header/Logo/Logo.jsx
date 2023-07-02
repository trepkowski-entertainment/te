import styles from './logo.module.scss'
import obraz from './logo-te.png'

export const Logo = () => {
    return(
        <div className={styles.logoDiv}>
            <img 
                className={styles.logoImg}
                src={obraz}
                alt='logo'
            />
            <h1 className={styles.logoH1}>Trepkowski Entertainment</h1>
        </div>
    )
}