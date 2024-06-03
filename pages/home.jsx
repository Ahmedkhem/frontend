import React from 'react'
import Qualities from '../src/components/qualities'
import Menu from '../src/components/menu'
import WhoAreWe from '../src/components/whoarewe'
import Team from '../src/components/team'
import Reservation from '../src/components/reservation'
import Footer from '../src/components/footer'

import HeroSection from '../src/components/herosection'
import About from '../src/components/about'

const Home = () => {
return (
    <>
    <HeroSection />
    <About/>
    <Qualities />
    <Menu/>
    <WhoAreWe/>
    <Team/>
    <Reservation/>
    <Footer/>
    </>
)
}

export default Home