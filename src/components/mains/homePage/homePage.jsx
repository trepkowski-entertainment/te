import styles from './homePage.module.scss'

import { CardElement } from "./CardElement/CardElement"
import { Section } from "../../Section/Section"
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
                            modalTitle={cardOffice.modal.modalTitle}
                            modalDescription={cardOffice.modal.modalDescription} 
                        />
                        <CardElement 
                            title={cardMusicStudio.title}
                            subtitle={cardMusicStudio.subtitle}
                            head={cardMusicStudio.paragraf.head}
                            parLi1={cardMusicStudio.paragraf.li1}
                            parLi2={cardMusicStudio.paragraf.li2}
                            parLi3={cardMusicStudio.paragraf.li3}
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
                        <div id='contactOffice'>
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
                            emailto={contactOffice.emailto}
                            tel={contactOffice.tel}
                            telto={contactOffice.telto}
                            add={contactOffice.add}
                            form={contactOffice.form}
                            btnFormName={contactOffice.btnFormName}
                            formSrc={contactOffice.formSrc} 
                        />
                        </div>
                        <div id='contactStudio'>
                        <ContactOffice 
                            header={contactMusicStudio.header}
                            name={contactMusicStudio.name}
                            aPar1={contactMusicStudio.about.par1}
                            aPar2={contactMusicStudio.about.par2}
                            aPar3={contactMusicStudio.about.par3}
                            aPar4={contactMusicStudio.about.par4}
                            timeP1={contactMusicStudio.time.p1}
                            timeP2={contactMusicStudio.time.p2}
                            timeP3={contactMusicStudio.time.p3}
                            timeP4={contactMusicStudio.time.p4}
                            email={contactMusicStudio.email}
                            emailto={contactMusicStudio.emailto}
                            tel={contactMusicStudio.tel}
                            telto={contactMusicStudio.telto}
                            form={contactMusicStudio.form}
                            btnFormName={contactMusicStudio.btnFormName}
                            formSrc={contactMusicStudio.formSrc}
                        />
                        </div>
                    </ContactCard>
                </Container>
            </Section>
        </div>
    )
}