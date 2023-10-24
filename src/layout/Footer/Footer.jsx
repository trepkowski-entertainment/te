import React from "react"
import styles from './footer.module.scss'

const Footer = () => {

    return(
        <div className={styles.foot__div}>
            <p className={styles.foot__p}>Copyright &copy; 2023 Trepkowski Develop. Create by Mateusz Trepkowski</p>
            {/* <ul className={styles.foot__list}>
                <li>
                    <h4>Lorem, ipsum.</h4>
                    <p>888-888-888</p>
                    <p>ppppppp@ppp.pp</p>
                </li>
                <li>
                    <h4>Lorem, ipsum.</h4>
                    <p>888-888-888</p>
                    <p>ppppppp@ppp.pp</p>
                </li>
            </ul> */}
        </div>
    )
}
export default Footer