import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"
import { HomePage } from "./components/mains/homePage/homePage"
import { CardElement } from "./components/mains/homePage/CardElement/CardElement"
import { Section } from "./components/mains/Section/Section"
import { AboutSection } from "./components/mains/homePage/AboutSection/AboutSection"
import { Container } from "./components/Container/Container"
import { ContactCard } from "./components/mains/homePage/Contact/ContactCard"
import { ContactOffice } from "./components/mains/homePage/Contact/ContactOffice/ContactOffice"
import {  MobileMenu } from "./components/header/MobileMenu/MobileMenu"
import { Logo } from "./components/header/Logo/Logo"
import { ButtonsMenu } from "./components/header/ButtonsMenu/ButtonsMenu"
import { Cards } from "./components/mains/homePage/Cards/Cards"

import elhome from './components/data/elhome.json'
import cardAboutAgency from './components/data/cardAboutAgency.json'
import contactOffice from './components/data/contactOffice.json'
import contactMusicStudio from './components/data/contactMusicStudio.json'
import { HeadDivCont } from "./components/header/HeadDivCont/HeadDivCont"




export const AppTe = () => {
    return (
        <div>
            <Header>
                <Container>
                    <HeadDivCont>
                        <Logo />
                        <ButtonsMenu />
                        <MobileMenu />
                    </HeadDivCont>
                </Container>
            </Header>
            <HomePage>
                <Section>
                    <Container>
                        <AboutSection />
                    </Container>
                </Section>
                <Section background={"cardSection"}>
                    <Container>
                        <Cards>
                            <CardElement 
                            title={elhome.title}
                            subtitle={elhome.subtitle}
                            paragraf={elhome.paragraf} />
                            <CardElement 
                            title={cardAboutAgency.title}
                            subtitle={cardAboutAgency.subtitle}
                            paragraf={cardAboutAgency.paragraf}
                            modalTitle={cardAboutAgency.modal.modalTitle}
                            modalDescription={cardAboutAgency.modal.modalDescription} />
                        </Cards>
                        </Container>
                </Section>
                <Section>
                    <Container>
                        <ContactCard>
                            <ContactOffice
                                name={contactOffice.name}
                                email={contactOffice.email}
                                tel={contactOffice.tel}
                                add={contactOffice.add}
                                form={contactOffice.form}
                                btnFormName={contactOffice.btnFormName}
                                formSrc={contactOffice.formSrc} />
                            <ContactOffice 
                                name={contactMusicStudio.name}
                                email={contactMusicStudio.email}
                                tel={contactMusicStudio.tel}
                                form={contactMusicStudio.form}
                                btnFormName={contactMusicStudio.btnFormName}
                                formSrc={contactMusicStudio.formSrc}/>
                        </ContactCard>
                    </Container>
                </Section>
                
            </HomePage>
            <p>kobenhawffeedxcvhbjkl</p>
            <Footer />
        </div>
    )
}