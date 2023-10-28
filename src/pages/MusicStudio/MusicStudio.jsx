import Container from "../../layout/Container/Container"

import styles from './musicStudio.module.scss'
import {MusicStudioSkills} from './../../components/MusicStudio/MusicStudioSkills/MusicStudioSkills'
import {MusicStudioCourses} from './../../components/MusicStudio/MusicStudioCourses/MusicStudioCourses'
import {MusicStudioEquipment} from './../../components/MusicStudio/MusicStudioEquipment/MusicStudioEquipment'
import {MusicStudioInstructors} from './../../components/MusicStudio/MusicStudioInstructors/MusicStudioInstructors'
import MusicStudioCalendar from './../../components/MusicStudio/MusicStudioCalendar/MusicStudioCalendar'

import musicStudioCourses from './../../assets/data/musicStudioCourses.json'
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
                        <div className={styles.coursesContent}>
                        {musicStudioCourses.map((item) => (
                            <MusicStudioCourses 
                            title={item.title}
                            aboutLine1={item.about.line1}
                            aboutLine2={item.about.line2}
                            aboutLine3={item.about.line3}
                            modalTitle={item.modal.title}
                            modalContent={item.modal.content}
                            modalPrice={item.modal.price}
                            pack1={item.modal.pax1.pack}
                            hours1={item.modal.pax1.hours}
                            cost1={item.modal.pax2.cost}
                            pack2={item.modal.pax2.pack}
                            hours2={item.modal.pax2.hours}
                            cost2={item.modal.pax3.cost}
                            pack3={item.modal.pax3.pack}
                            hours3={item.modal.pax3.hours}
                            cost3={item.modal.pax3.cost}
                            pack4={item.modal.pax4.pack}
                            hours4={item.modal.pax4.hours}
                            cost4={item.modal.pax4.cost}
                            pack5={item.modal.pax5.pack}
                            hours5={item.modal.pax5.hours}
                            cost5={item.modal.pax5.cost}
                            pack6={item.modal.pax6.pack}
                            hours6={item.modal.pax6.hours}
                            cost6={item.modal.pax6.cost}
                            pack7={item.modal.pax7.pack}
                            hours7={item.modal.pax7.hours}
                            cost7={item.modal.pax7.cost}
                            pack8={item.modal.pax8.pack}
                            hours8={item.modal.pax8.hours}
                            cost8={item.modal.pax8.cost}
                            />
                            ))}
                        </div>
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
                    {/* <div>
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
                    </div> */}
                </div>
            </Container>
        </section>
        
    )
}
export default MusicStudio