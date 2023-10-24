import NavTiles from "../../components/NavTiles/NavTiles"
import Container from "../../layout/Container/Container"

import styles from './homePage.module.scss'



const HomePage = () => {
    return(
        <section className={styles.home}>
            <Container>
                <div className={styles.home__nav}>
                    <NavTiles />
                </div>
            </Container>
        </section>
    )
}
export default HomePage