import react from 'react'
import { motion } from 'framer-motion'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Most_view from './Component/Most View/Most_view'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Gallery from './Component/Gallery/Gallery'
import Blogs from './Component/Blogs/Blogs'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'

function App() {

  return (
    <div className='box'>
      {/* <Navbar /> */}
      <Hero />
      <div className="container_1">
        <Title subTitle='I’ve found my happy place' title='What’s on my bucket list? Everywhere.' />
        <Most_view />
        <About />
        <Title subTitle='Gallery' title='Take only pictures, leave only footprints.' />
        <Gallery />
        <Title subTitle='Blogs' title='The best things happen outside of our comfort zones.' />
        <Blogs />
        <Title subTitle='Contact us' title='Get in Touch' />
        {/* <Contact /> */}

        <Footer />
      </div>
    </div>
  )
}

export default App
