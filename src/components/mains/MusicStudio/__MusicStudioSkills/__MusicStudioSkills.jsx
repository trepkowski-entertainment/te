import styles from './musicStudioSkills.module.scss'


import iconDemo from './../icons/demoSvg.svg'


export const MusicStudioSkills = () => {

    return(
        <div className={styles.skills}>
            <ul className={styles.skills__list}>
                {/* {musicStudioSkills.map((item) => (
                <li key={item.id}>
                    <img
                        src={require(`./icons/${item.svg}`)}
                        alt=''
                    />
                    <div>
                        <h3>{item.title}</h3>
                        <p>Lorem ipsum ipsum lorem fatale content, array noret loret, operation sretro.</p>
                    </div>
                </li>
                ))} */}
                <li className={styles.skills__listEl}>
                    <img className={styles.skills__img}
                        src={iconDemo}
                        alt=''
                    />
                    <div className={styles.skills__listDiv}>
                        <h3>Czytanie nut głosem</h3>
                        <p>Lorem ipsum ipsum lorem fatale content, array noret loret, operation sretro.</p>
                    </div>
                </li>
                <li className={styles.skills__listEl}>
                    <img className={styles.skills__img}
                        src={iconDemo}
                        alt=''
                    />
                    <div className={styles.skills__listDiv}>
                        <h3>Techniki wokalne</h3>
                        <p>Lorem ipsum ipsum lorem fatale content, array noret loret, operation sretro.</p>
                    </div>
                </li>
                <li className={styles.skills__listEl}>
                    <img className={styles.skills__img}
                        src={iconDemo}
                        alt=''
                    />
                    <div className={styles.skills__listDiv}>
                        <h3>Najlepsi instruktorzy</h3>
                        <p>Lorem ipsum ipsum lorem fatale content, array noret loret, operation sretro.</p>
                    </div>
                </li>
                <li className={styles.skills__listEl}>
                    <img className={styles.skills__img}
                        src={iconDemo}
                        alt=''
                    />
                    <div className={styles.skills__listDiv}>
                        <h3>Indywidualne podejście</h3>
                        <p>Lorem ipsum ipsum lorem fatale content, array noret loret, operation sretro.</p>
                    </div>
                </li>
                <li className={styles.skills__listEl}>
                    <img className={styles.skills__img}
                        src={iconDemo}
                        alt=''
                    />
                    <div className={styles.skills__listDiv}>
                        <h3>Teoria muzyki</h3>
                        <p>Lorem ipsum ipsum lorem fatale content, array noret loret, operation sretro.</p>
                    </div>
                </li>
                <li className={styles.skills__listEl}>
                    <img className={styles.skills__img}
                        src={iconDemo}
                        alt=''
                    />
                    <div className={styles.skills__listDiv}>
                        <h3>Zajęcia aktorskie</h3>
                        <p>Lorem ipsum ipsum lorem fatale content, array noret loret, operation sretro.</p>
                    </div>
                </li>
                <li className={styles.skills__listEl}>
                    <img className={styles.skills__img}
                        src={iconDemo}
                        alt=''
                    />
                    <div className={styles.skills__listDiv}>
                        <h3>Opieka merytoryczna</h3>
                        <p>Lorem ipsum ipsum lorem fatale content, array noret loret, operation sretro.</p>
                    </div>
                </li>
                <li className={styles.skills__listEl}>
                    <img className={styles.skills__img}
                        src={iconDemo}
                        alt=''
                    />
                    <div className={styles.skills__listDiv}>
                        <h3>Zróżnicowane style wokalne</h3>
                        <p>Lorem ipsum ipsum lorem fatale content, array noret loret, operation sretro.</p>
                    </div>
                </li>
                
            </ul>         
            
        </div>
    )
}