import styles from './musicStudioSkills.module.scss'


import musicStudioSkills from './../../../data/musicStudioSkills.json'



export const MusicStudioSkills = () => {

    return(
        <div className={styles.skills}>
            <ul className={styles.skills__list}>
                {musicStudioSkills.map((item) => (
                <li className={styles.skills__listEl}
                    key={item.id}
                    >
                    <img className={styles.skills__img}
                         src={require(`./../icons/${item.svg}`)}
                        alt=''
                    />
                    <div className={styles.skills__listDiv}>
                        <h3 className={styles.skills__listDivTitle}>{item.title}</h3>
                        <p className={styles.skills__listDivAbout}>{item.about}</p>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )
}