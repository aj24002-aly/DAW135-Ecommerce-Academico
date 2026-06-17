import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import AllInOne from '../components/AllInOne'
import WhatIs from '../components/WhatIs'
import Features from '../components/Features'
import ExploreCourses from '../components/ExploreCourses'
import LatestNews from '../components/LatestNews'
import Footer from '../components/Footer'
import "../styles/styles.css";

function LandingPage() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Stats />
      <AllInOne />
      <WhatIs />
      <Features />
      <ExploreCourses />
      <LatestNews />
      <Footer />
    </div>
  )
}

export default LandingPage