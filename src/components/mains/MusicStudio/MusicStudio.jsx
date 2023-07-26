import { Section } from './../../Section/Section'
import { Container } from './../../Container/Container'

import musicStudioPrices from './../../data/musicStudioPrices.json'

import { MusicStudioSkills } from './MusicStudioSkills/MusicStudioSkills'

import styles from './musicStudio.module.scss'
import { MusicStudioCourses } from './MusicStudioCourses/MusicStudioCourses'
import { MusicStudioEquipment } from './MusicStudioEquipment/MusicStudioEquipment'
import { MusicStudioCalendar } from './MusicStudioCalendar/MusicStudioCalendar'
import { MusicStudioInstructors } from './MusicStudioInstructors/MusicStudioInstructors'

import temsSquad from './../../data/temsSquad.json'

export const MusicStudio = () => {


    return(
        <div>
            <Section>
                <Container>
                    <h1 className={styles.btnClass}>Music Studio</h1>
                    <MusicStudioSkills />
                </Container>
            </Section>
            <Section>
                <Container>
                    <h2 className={styles.btnClass}>Nasz program</h2>
                    {/* // mapowanie i propsy ///  */}
                    <MusicStudioCourses />
                </Container>
            </Section>
            <Section>
                <Container>
                    <h3 className={styles.btnClass}>Instruktorzy</h3>
                    <div className={styles.instructorsContent}>
                    {temsSquad.map((item) => (
                        <MusicStudioInstructors
                        id={item.id}
                        name={item.name}
                        status={item.comment}
                        note={item.description.note}
                        live={item.description.live}
                        
                        />
                    ))}
                    </div>
                    
                </Container>
            </Section>
            <Section>
                <Container>
                    <h3 className={styles.btnClass}>Equipment</h3>
                    <MusicStudioEquipment />
                </Container>
            </Section>
            <Section>
                <Container>
                    <h3 className={styles.btnClass}>Calendar</h3>
                    <MusicStudioCalendar />
                </Container>
            </Section>
            <Section>
                <Container>
                    <p>cennik nie - cennik w modalu w kartach</p>
                    <p>kalendarz pracy studio</p>
                    <p>niezbedne informacje - requipment</p>
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
            <Section>
                <Container>
                </Container>
            </Section>
        </div>
        
    )
}