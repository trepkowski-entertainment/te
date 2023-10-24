import MenuMobile from '../../components/MenuMobile/MenuMobile'
import Logo from './../../components/Logo/Logo'
import Container from './../Container/Container'
import styles from './header.module.scss'


const Header = () => {
    return(
        <section className={styles.head}>
            <Container>
                <div className={styles.head__div}>
                    <Logo />
                    <MenuMobile />
                </div>
            </Container>
            
            
            
        </section>
    )
}
export default Header