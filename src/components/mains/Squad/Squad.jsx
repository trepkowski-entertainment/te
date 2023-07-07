import { SquadCard } from "./SquadCard/SquadCard"
import teSquad from './../../data/teSquad.json'
import temsSquad from './../../data/temsSquad.json'
import styles from './squad.module.scss'
import { Section } from "../../Section/Section"
import { Container } from "../../Container/Container"


export const Squad = () => {
    return(
    <div>
        <Section>
            <Container>
                <div className={styles.squad__officeDiv}>
                    <h1>Squad squer</h1>
                    <h2>te office squad</h2>
                    <div className={styles.squad__card}>
                    {teSquad.map((item) => (
                        <SquadCard
                            key={item.id}
                            name={item.name}
                            status={item.status}
                            desNote={item.description.note}
                            desLive={item.description.live}
                            picSrc={item.picture.src}
                            picAlt={item.picture.alt}
                        />
                    ))}
                    </div>
                </div>
            </Container>
        </Section>
        <Section>
            <Container>
                <div>
                    <h3>tems mentors squad</h3>
                    <div className={styles.squad__card}>
                    {temsSquad.map((item) => (
                        <SquadCard
                            key={item.id}
                            name={item.name}
                            status={item.status}
                            desNote={item.description.note}
                            desLive={item.description.live}
                            picSrc={item.picture.src}
                            picAlt={item.picture.alt}
                        />
                    )) }
                    </div>
                </div>
            </Container>
        </Section>
    </div>
        
            
    )
}