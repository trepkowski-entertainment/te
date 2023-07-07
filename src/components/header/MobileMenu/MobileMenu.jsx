
import React, {useState} from "react"
import styles from './mobileMenu.module.scss'
import { MobileMenuContent } from "./MobileMenuContent";
import menuSvg from './bass-clef-vector.jpg'



export const MobileMenu = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(true)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }



    return (
            <div className={styles.head__divBtnMenu}>
                <img onClick={toggleMenu} className={styles.head__imgBtnMenu} src={menuSvg} alt='logo'/>
                
                {isMenuOpen && (
                    <div>
                        {/* <button onClose={closeMenu}>x</button> */}
                        <MobileMenuContent onClose={closeMenu} />
                    </div>
                    
                    
                )}
            </div>
        
    )
}