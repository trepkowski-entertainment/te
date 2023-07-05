import { useState, useEffect } from "react"


import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"
import { HomePage } from "./components/mains/homePage/homePage"

import { Container } from "./components/Container/Container"

import {  MobileMenu } from "./components/header/MobileMenu/MobileMenu"
import { Logo } from "./components/header/Logo/Logo"
import { ButtonsMenu } from "./components/header/ButtonsMenu/ButtonsMenu"
import { HeadDivCont } from "./components/header/HeadDivCont/HeadDivCont"
import { LoaderStart } from "./components/LoaderStart/LoaderStart"
import { Route, Routes } from "react-router-dom"

import { ContactPage } from "./components/mains/contactPage/contactPage"
import { Squad } from "./components/mains/Squad/Squad"
import { SquadDescription } from "./components/mains/Squad/SquadCard/SquadDescription/SquadDescription"





export const AppTe = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [] )






    return (
        <div>
            {loading ? (<LoaderStart /> 
            ) : (
                <>
            <Header>
                <Container>
                    <HeadDivCont>
                        <Logo />
                        <ButtonsMenu />
                        <MobileMenu />
                    </HeadDivCont>
                </Container>
            </Header>
            <Routes>
                <Route path="*" element={<HomePage />} />
                <Route path="/" element={<HomePage/>}/>
                <Route path="/contact-page" element={<ContactPage/>}/>
                <Route path='/squad' element={<Squad/>}>
                    <Route path="squad-description" element={<SquadDescription/>}/>
                </Route>

            </Routes>
            
                
                
            
            <p>kobenhawffeedxcvhbjkl</p>
            <Footer />
            </>
              )}
        </div>
    )
}