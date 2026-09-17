import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Treatments from './components/Treatments'
import WhyUs from './components/WhyUs'
import FeaturedBox from './components/FeaturedBox'
import HowWeWork from './components/HowWeWork'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import BlogSection from './components/BlogSection'
import Location from './components/Location'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import AllTreatments from './components/AllTreatments'
import Legal from './pages/Legal'
import BlogPost from './pages/BlogPost'

const Home = () => (
  <>
    <div className="relative">
      <Navbar />
      <Hero />
    </div>

    <Treatments />
    <WhyUs />
    <FeaturedBox />
    <HowWeWork />
    <Testimonials />
    <BlogSection />
    <Location />
    <ContactSection />
    <Footer />
  </>
)

function App() {
  return (
    <main className="bg-white text-black">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/tratamientos"
          element={
            <>
              <Navbar />
              <AllTreatments />
              <Footer />
            </>
          }
        />

        <Route
          path="/blog/:slug"
          element={
            <>
              <Navbar />
              <BlogPost />
              <Footer />
            </>
          }
        />

        <Route
          path="/legal"
          element={
            <>
              <Navbar />
              <Legal />
              <Footer />
            </>
          }
        />
      </Routes>
    </main>
  )
}

export default App