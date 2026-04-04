import { motion } from 'framer-motion'
import Contact from './components/Contact'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'


const MotionDiv = motion.div;

function App() {

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <>
      <Navbar />

      <MotionDiv
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
      >

        <Hero />

      </MotionDiv>

      <MotionDiv
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >

        <Services />

      </MotionDiv>
      <MotionDiv
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
\
        <Features />

      </MotionDiv>
      <MotionDiv
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >

        <Contact />

      </MotionDiv>

      <Footer />

    </>
  )
}

export default App
