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
import { HeadDivCont } from "./components/header/HeadDivCont/HeadDivCont"

import elhome from './components/data/elhome.json'
import cardMusicStudio from './components/data/cardMusicStudio.json'
import contactOffice from './components/data/contactOffice.json'
import contactMusicStudio from './components/data/contactMusicStudio.json'
import aboutSection from './components/data/aboutSection.json'




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
                        <AboutSection 
                        p1={aboutSection.p1}
                        p2={aboutSection.p2}
                        p3={aboutSection.p3}/>
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
                            title={cardMusicStudio.title}
                            subtitle={cardMusicStudio.subtitle}
                            paragraf={cardMusicStudio.paragraf}
                            modalTitle={cardMusicStudio.modal.modalTitle}
                            modalDescription={cardMusicStudio.modal.modalDescription} />
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