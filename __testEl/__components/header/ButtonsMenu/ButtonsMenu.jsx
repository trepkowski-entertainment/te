import { NavLink } from 'react-router-dom'
import styles from './buttonsMenu.module.scss'
import styled from "styled-components";




const StyledLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    /* position: relative; */
    background-image: linear-gradient(135deg, #FFD700, #B08B59, #6B4423);

    border-radius: 40px;
    padding: 5px 20px;
    margin: 20px;

        &.active {
            background-image:  linear-gradient(135deg, #E6E6E6, #A1A1A1, #444444);
        }

        /* &.active::after {
            content: '';
            position: absolute;
            background-color: red;
            width: 100%;
            height: 2px;
            left: 0px;
            bottom: -2px;
        } */
    
`;

export const ButtonsMenu = () => {
    return(
        <div className={styles.buttonsMenu}>
            <StyledLink to="/" >Strona główna</StyledLink>
            <StyledLink>Agencja Artystyczna</StyledLink>
            <StyledLink to="/music-studio">Music Studio</StyledLink>
            <StyledLink to="/squad">Zespół</StyledLink>
            {/* <button className={styles.buttonsMenu__btn}><StyledLink to="/squad">Zespół</StyledLink></button> */}
            {/* <button><Nav to="/#contactOffice">Kontakt biuro</Nav></button> */}

        </div>
    )
}