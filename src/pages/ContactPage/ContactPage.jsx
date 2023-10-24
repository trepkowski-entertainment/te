import { ContactOffice } from "../../components/Contact/ContactCard"
import Container from "../../layout/Container/Container"
import styles from './contactPage.module.scss'
import contactOffice from './../../assets/data/contactOffice.json'



const ContactPage = () => {
    return(
        <section className={styles.contact}>
            <Container>
                <div id='contactOffice'  className={styles.contact__div} >
                    {contactOffice.map((item) => (
                        <ContactOffice
                            header={item.header}
                            name={item.name}
                            aPar1={item.about.par1}
                            aPar2={item.about.par2}
                            aPar3={item.about.par3}
                            timeP1={item.time.p1}
                            timeP2={item.time.p2}
                            timeP3={item.time.p3}
                            timeP4={item.time.p4}
                            email={item.email}
                            tel={item.tel}
                            telto={item.telto}
                            btnFormName={item.btnFormName}
                            formSrc={item.formSrc} 
                        />
                    ))}
                </div>
                <p>Contact</p>
            </Container>
        </section>
    )
}
export default ContactPage




