import { Section } from './../../Section/Section'
import { Container } from './../../Container/Container'

import musicStudioCourses from './../../data/musicStudioCourses.json'
import musicStudioPrices from './../../data/musicStudioPrices.json'
import musicStudioSkills from './../../data/musicStudioSkills.json'
// import { MusicStudioSkills } from './MusicStudioSkills/MusicStudioSkills'

import styles from './musicStudio.module.scss'

export const MusicStudio = () => {


    return(
        <div>
            <Section>
                <Container>
                    <h1>Music Studio</h1>
                    <div className={styles.skills}>
                        <ul className={styles.skills__list}>
                        {musicStudioSkills.map((item) => (
                            <li className={styles.skills__listEl}
                                 key={item.id}>
                                <img className={styles.skills__img}
                                    src={require(`./icons/${item.svg}`)}
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
                    
                    {/* <MusicStudioSkills /> */}
                </Container>
            </Section>
            <Section>
                <Container>
                    <h2>Nasz program</h2>
                    <div className={styles.courses}>
                        {/* <div className={styles.list}> */}
                        {musicStudioCourses.map((item) => (
                            <div className={styles.courses__content}>
                                <img className={styles.courses__img}
                                    src=''
                                    alt=''/>
                                <div className={styles.courses__about}>
                                    <h4>{item.title}</h4>
                                    <p>{item.about.line1}</p>
                                    <p>{item.about.line2}</p>
                                    <p>{item.about.line3}</p>
                                </div>
                            </div>
                        ))}
                        {/* </div> */}
                    </div>
                </Container>
            </Section>
            <Section>
                <Container>
                    <h3>Cennik</h3>
                    <div>
                        {musicStudioPrices.map((item) => (
                            <div>
                                <img 
                                    src=''
                                    alt=''/>
                                <div>
                                    <h4>{item.title}</h4>
                                    <h5>{item.about1.service} ({item.about1.units})</h5>
                                    <p>{item.about1.price}</p>
                                    <h5>{item.about2.service} ({item.about2.units})</h5>
                                    <p>{item.about2.price}</p>
                                    <h5>{item.about3.service} ({item.about3.units})</h5>
                                    <p>{item.about3.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
        
    )
}