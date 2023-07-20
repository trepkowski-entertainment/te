import { Section } from './../../Section/Section'
import { Container } from './../../Container/Container'

import musicStudioPrices from './../../data/musicStudioPrices.json'

import { MusicStudioSkills } from './MusicStudioSkills/MusicStudioSkills'

// import styles from './musicStudio.module.scss'
import { MusicStudioCourses } from './MusicStudioCourses/MusicStudioCourses'

export const MusicStudio = () => {


    return(
        <div>
            <Section>
                <Container>
                    <h1>Music Studio</h1>
                    <MusicStudioSkills />
                </Container>
            </Section>
            <Section>
                <Container>
                    <h2>Nasz program</h2>
                    <MusicStudioCourses />
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