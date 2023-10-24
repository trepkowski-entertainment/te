
import { useState, useEffect, lazy } from "react"
import { Route, Routes } from "react-router-dom"

import { LoaderStart } from "./components/LoaderStart/LoaderStart"
import { NotFound } from "./components/NotFound/NotFound"

import Header from "./layout/Header/Header"
import Footer from "./layout/Footer/Footer"
import HomePage from "./pages/HomePage/HomePage"
import ArtisticAgency from "./pages/ArtisticAgency/ArtisticAgency"
import MusicStudio from "./pages/MusicStudio/MusicStudio"
import SquadPage from "./pages/SquadPage/SquadPage"
import ContactPage from "./pages/ContactPage/ContactPage"
import Layout from './layout/Layout/Layout';

// lazy loading 


function App() {


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
        <div>
          <Layout>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/te" element={<HomePage/>}/>
          <Route path="/" element={<HomePage />} />
          <Route path='/artistic-agency' element={<ArtisticAgency />}/>
          <Route path='/music-studio' element={<MusicStudio />}/>
          <Route path='/squad' element={<SquadPage/>} />
          <Route path='/contact' element={<ContactPage />}/>
        </Routes>
        <Footer />
      </Layout>
       
        </div>
      )} 
    </div>
  );
}

export default App;
