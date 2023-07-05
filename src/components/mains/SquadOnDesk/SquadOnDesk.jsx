import { useState, useEffect } from "react"

import { Container } from "../../Container/Container"
import { Section } from "../Section/Section"
import { Squad } from "../Squad/Squad"


export const SquadOnDesk = () => {

    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



    return(
        <>

        {isDesktop && (
        <Section>
            <Container>
                <Squad />
            </Container>
        </Section>
        )}
        
        </>
    )
}