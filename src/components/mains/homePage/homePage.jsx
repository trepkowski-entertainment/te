import styles from './homePage.module.scss'

import { CardElement } from "./CardElement/CardElement"
import { Section } from "./../Section/Section"
import { AboutSection } from "./AboutSection/AboutSection"

import { ContactCard } from "./Contact/ContactCard"
import { ContactOffice } from "./Contact/ContactOffice/ContactOffice"

import { Cards } from "./Cards/Cards"
import { Container } from "./../../Container/Container"



import cardOffice from './../../data/cardOffice.json'
import cardMusicStudio from './../../data/cardMusicStudio.json'
import contactOffice from './../../data/contactOffice.json'
import contactMusicStudio from './../../data/contactMusicStudio.json'
import aboutSection from './../../data/aboutSection.json'
import { SquadOnDesk } from '../SquadOnDesk/SquadOnDesk'


export const HomePage = () => {
    return(
        <div className={styles.home}>
            <Section>
                <Container>
                    <AboutSection 
                        p1={aboutSection.p1}
                        p2={aboutSection.p2}
                        p3={aboutSection.p3}
                    />
                </Container>
            </Section>
            <Section background={"cardSection"}>
                <Container>
                    <Cards>
                        <CardElement 
                            title={cardOffice.title}
                            subtitle={cardOffice.subtitle}
                            paragraf={cardOffice.paragraf} 
                        />
                        <CardElement 
                            title={cardMusicStudio.title}
                            subtitle={cardMusicStudio.subtitle}
                            paragraf={cardMusicStudio.paragraf}
                            modalTitle={cardMusicStudio.modal.modalTitle}
                            modalDescription={cardMusicStudio.modal.modalDescription} 
                        />
                    </Cards>
                </Container>
            </Section>

            <SquadOnDesk />

            <Section>
                <Container>
                    <ContactCard>
                        <ContactOffice
                            header={contactOffice.header}
                            name={contactOffice.name}
                            aPar1={contactOffice.about.par1}
                            aPar2={contactOffice.about.par2}
                            aPar3={contactOffice.about.par3}
                            timeP1={contactOffice.time.p1}
                            timeP2={contactOffice.time.p2}
                            timeP3={contactOffice.time.p3}
                            timeP4={contactOffice.time.p4}
                            email={contactOffice.email}
                            tel={contactOffice.tel}
                            add={contactOffice.add}
                            form={contactOffice.form}
                            btnFormName={contactOffice.btnFormName}
                            formSrc={contactOffice.formSrc} 
                        />
                        <ContactOffice 
                            name={contactMusicStudio.name}
                            email={contactMusicStudio.email}
                            tel={contactMusicStudio.tel}
                            form={contactMusicStudio.form}
                            btnFormName={contactMusicStudio.btnFormName}
                            formSrc={contactMusicStudio.formSrc}
                        />
                    </ContactCard>
                </Container>
            </Section>
        </div>
    )
}