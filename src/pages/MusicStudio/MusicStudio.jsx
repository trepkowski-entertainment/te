import Container from "../../layout/Container/Container"

import styles from './musicStudio.module.scss'
import {MusicStudioSkills} from './../../components/MusicStudio/MusicStudioSkills/MusicStudioSkills'
import {MusicStudioCourses} from './../../components/MusicStudio/MusicStudioCourses/MusicStudioCourses'
import {MusicStudioEquipment} from './../../components/MusicStudio/MusicStudioEquipment/MusicStudioEquipment'
import {MusicStudioInstructors} from './../../components/MusicStudio/MusicStudioInstructors/MusicStudioInstructors'
import MusicStudioCalendar from './../../components/MusicStudio/MusicStudioCalendar/MusicStudioCalendar'

import temsSquad from './../../assets/data/temsSquad.json'
import musicStudioPrices from './../../assets/data/musicStudioPrices.json'

const MusicStudio = () => {
    return(
        <section className={styles.musicStudio}>
            <Container>
                <div>
                    <div>
                        <h1 className={styles.btnClass}>Music Studio</h1>
                        <MusicStudioSkills />
                    </div>
                    <div>
                        <h2 className={styles.btnClass}>Nasz program</h2>
                        {/* // mapowanie i propsy ///  */}
                        <MusicStudioCourses />
                    </div>
                    <div>
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
                    </div>
                    {/* <div>
                        <h3 className={styles.btnClass}>Equipment</h3>
                        <MusicStudioEquipment />
                    </div> */}
                    <div>
                        <h3 className={styles.btnClass}>Calendar</h3>
                        <MusicStudioCalendar />
                    </div>
                    <div>
                        <p>cennik nie - cennik w modalu w kartach</p>
                        <p>kalendarz pracy studio</p>
                        <p>niezbedne informacje - requipment</p>
                        <h3>Cennik</h3>
                    </div>
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
                </div>
            </Container>
        </section>
        
    )
}
export default MusicStudio