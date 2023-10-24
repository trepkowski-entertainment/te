import styles from './logo.module.scss'
import logo from './logo-te.png'
import { Link } from 'react-router-dom'

export const Logo = () => {
    return(
        <div className={styles.logoDiv}>
            <Link to='/te'>
                <img 
                className={styles.logoImg}
                src={logo}
                alt='logo'
            />
            </Link>
            <h1 className={styles.logoH1}>Trepkowski Entertainment</h1>
        </div>
    )
}