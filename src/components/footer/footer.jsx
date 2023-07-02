import React from "react"
import styles from './footer.module.scss'

export const Footer = () => {

    return(
        <div className={styles.foot__div}>
            <ul className={styles.foot__list}>
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
            </ul>
        </div>
    )
}