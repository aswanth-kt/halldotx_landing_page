import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import bannerImage from "../assets/banner.png"


const heroTags = ["Website Design", "Development", "Maintenance", "SEO", "Digital Marketing"]

const heroHighlights = [
  ["48h", "Launch Ready MVP"],
  ["99%", "Client Satisfaction"],
  [`<1s`, "Lightning Fast Performance"],
  ["24/7", "Continuous Support"]
]

const Hero = () => {
  return (
    <section
      id='top'
      className='px-4 pb-2 pt-16 sm:px-6 lg:px-8 lg:pb-32 lg:pt-20'
    >
      <div className='mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center'>
        <motion.div
          initial={{ opacity: 0, y:32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >

          <div 
            className='inline-flex items-center border border-[rgba(151,255,251,0.16)] rounded-full bg-white/6 px-4 py-2 text-sm text-[var(--teal-strong)] backdrop-blur-ms'
          >
            Premium web presence for modern business
          </div>

          <h1
          className="mt-8 max-w-3xl font-['Sora'] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
            Building the Digital Foundation for Your businesses
          </h1>

          <p
            className='mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg'
          >
            Hall Dotx creates polished websites, scalable development systems, proactive maintenance, SEO-ready to move ambitious brands forward.
          </p>

          <div className='mt-10 flex flex-col gap-4 sm:flex=row'>

            <a 
              href="#contact"
              className='inline-flex items-center justify-center gap-2 border border-[rgba(151,255,251,0.2)] bg-[linear-gradient(135deg,#6af5ef,#1c807d)] rounded-full px-6 py-3.5 font-semibold text-slate-950 shadow-[0_0_28px_rgba(106,245,239,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(106,245,239,0.36)]'
            >
              Start Project
              <ArrowRight className='h-4 w-4' />
            </a>

            <a 
              href="#services"
              className='inline-flex items-center justify-center gap-2 border rounded-full border-white/12 bg-white/6 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition duration-300 hover:border-[rgba(151,255,251,0.28)] hover:bg-white/10'
            >
              <PlayCircle className='h-4 w-4' />
              Explore Services
            </a>

            <div className='mt-10 flex flex-wrap gap-3'>
              {heroTags.map((tag, i) => (
                <span
                  key={i}
                  className='border rounded-full border-white/10 bg-[var(--panel)] px-4 py-2 text-slate-200 backdrop-blur-md'
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

        </motion.div>

        {/* banner img section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className='relative'
        >

          <div className='absolute insert-x-8 top-1/2 h-20 -translate-y-1/2 rounded-full bg-[rgba(105,243,238,0.16)] blur-3xl' />

          <div 
            className='rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8'>
            <img src={bannerImage} alt="banner image" />

            <div className='mt-6 grid gap-3 sm:grid-cols-4'>
              {heroHighlights.map(([value, label]) => (
                <div
                  key={label}
                  className='border rounded-2xl border-white/10 bg-[rgba(3,10,12,0.72)] p-4 text-center'
                >

                  <p className="font-['Sora] text-2xl font-semibold text-[var(--teal-strong)]">
                    {value}
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    {label}
                  </p>

                </div>
              ))}
            </div>
            
          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero