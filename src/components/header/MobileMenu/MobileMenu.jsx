
import React, {useState, useEffect} from "react"
import styles from './mobileMenu.module.scss'



export const MobileMenu = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    const handleMenuOutsideClick = (event) => {
        if (!event.target.closest('.menu')) {
          setMenuOpen(false);
        }
      };
    
    //   useEffect(() => {
    //     document.addEventListener('click', handleMenuOutsideClick);
    
    //     return () => {
    //       document.removeEventListener('click', handleMenuOutsideClick);
    //     };
    //   }, []);

    return (
            <div className={styles.head__divBtnMenu}>
                <button onClick={toggleMenu} >menu</button>
                {isMenuOpen && (
                    <ul className={styles.head__menuList}>
                        <li><p>opoopo</p></li>
                        <li><p>opoopo</p></li>
                        <li><p>opoopo</p></li>
                    </ul>
                )}
            </div>
        
    )
}