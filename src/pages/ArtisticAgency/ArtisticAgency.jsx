import AgencyAbout from "../../components/AgencyAbout/AgencyAbout"
import AgencyServices from "../../components/AgencyServices/AgencyServices"
import Container from "../../layout/Container/Container"
import agencyText from './../../assets/data/artisticAgencyAbout.json'

import styles from './artisticAgency.module.scss'


const ArtisticAgency = () => {

    return(
        <section className={styles.agency}>
            <Container>
                <div className={styles.agency__box}>
                    <h1>Artistic Agency</h1>
                    <AgencyServices />
                    <div>
                        <p>W naszej agencji artystycznej, muzyka jest naszą pasją i życiową misją. 
                            Jesteśmy zespołem utalentowanych artystów, którzy oddają się tworzeniu dźwięków, 
                            które poruszają serca i dusze. 
                        </p>
                        <p>Nasza oferta jest różnorodna i obejmuje wiele 
                            dziedzin muzycznych, od organizacji oprawy muzycznej na ślubach i weselach, 
                            przez koncerty pogrzebowe, 
                            po świeckie uroczystości pogrzebowe. 
                        </p>
                        <p>
                            Oto, co nas wyróżnia:
                        </p>
                        <p>
                            W naszej agencji nie tylko tworzymy dźwięki, ale przede wszystkim emocje. 
                            Jesteśmy gotowi dzielić się naszą pasją z Wami i uczynić 
                            Wasze wyjątkowe chwile jeszcze bardziej wyjątkowymi. 
                        </p>
                        <p>
                            Dla nas każdy dźwięk to opowieść, a każda uroczystość to wyjątkowy moment, 
                            który warto uczcić w sposób niezapomniany.
                        </p>
                    </div>
                    <h3>Nasza oferta</h3>                    
                    <div className={styles.agency__box__about}>
                        {agencyText.map((item) => (
                            <AgencyAbout
                            key={item.id}
                            title={item.title}
                            des={item.description}
                            modalTitle={item.modal.title}
                            modalDes={item.modal.description}
                            />
                        ))}
                    </div>

                </div>
             

                <p>Zapraszamy na konsultacje telefoniczne oraz online celem uzgodnienia szczegółowej oferty.</p>

            </Container>
        </section>
    )
}

export default ArtisticAgency
