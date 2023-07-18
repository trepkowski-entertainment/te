import { NavLink } from 'react-router-dom'
import styles from './buttonsMenu.module.scss'
import styled from "styled-components";



const StyledLink = styled(NavLink)`
    color: blue;
    text-decoration: none;
    position: relative;

        &.active::after {
            content: '';
            position: absolute;
            background-color: red;
            width: 100%;
            height: 2px;
            left: 0px;
            bottom: -2px;
        }
    
`;

export const ButtonsMenu = () => {
    return(
        <div className={styles.head__divBtn}>
            <button className={styles.btnLink}><StyledLink to="/" >Strona główna</StyledLink></button>
            {/* <button><Nav to="/#contactOffice">Kontakt biuro</Nav></button> */}
            <button><StyledLink to="/squad">Zespół</StyledLink></button>

        </div>
    )
}