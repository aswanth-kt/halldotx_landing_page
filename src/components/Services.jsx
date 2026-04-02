import { motion } from 'framer-motion';
import { 
  ChartNoAxesCombined,
  LayoutTemplate, 
  Search, 
  Settings2, 
  Wrench
} from 'lucide-react'


const MotionArticle = motion.article;

const services = [
  {
    icon: LayoutTemplate,
    title: "Website Design",
    description: "Brand-first interfaces with premium layouts, strong typography, and clear conversion paths."
  },
  {
    icon: Settings2,
    title: "Website Development",
    description: "Reliable frontends and scalable builds engineered for speed, flexibility, and future growth."
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Ongoing support, fixes, updates, and performance care so your site stays sharp every day."
  },
  {
    icon: Search,
    title: "SEO",
    description: "Search-friendly structure, technical optimization, and content alignment that compounds visibility."
  },
  {
    icon: ChartNoAxesCombined,
    title: "Digital Marketing",
    description: "Connected campaigns and funnel thinking that turn traffic into measurable business momentum."
  }
];

const Services = () => {
  return (
    <section
      id='services'
      className='px-4 py-24 sm:px-6 lg:px-8'
    >
      <div className='mx-auto max-w-7xl'>

        <div className='max-w-3xl'>

          <p
            className="font-['Sora'] text-sm font-semibold uppercase tracking-[0.35rem] text-[var(--teal-strong)]"
          >
            Services
          </p>

          <h2 className='mt-4 text-3xl font-semibold text-white sm:text-4xl'>
            Crafted to make your digital presence feel future-ready.
          </h2>

          <p className='mt-4 text-lg leading-8 text-slate-400'>
            Every service is designed to work together, from visual identity and build quality to growth, discoverability, and long-term upkeep.
          </p>

        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5'>

          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <MotionArticle
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className='group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition duration-300'
              >

                <div className='absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100'>
                  <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(105,243,238,0.12),transparent_40%,rgba(255,255,255,0.04))]' />
                  <div className='absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--teal-strong)] to-transparent' />
                </div>

                <div
                  className='relative flex h-14 w-14 items-center justify-center border rounded-2xl border-[rgba(151,255,251,0.18)] bg-[rgba(105,243,238,0.08)] text-[var(--teal-strong)] shadow-[0_0_20px_rgba(105,243,238,0.12)] transition duration-300 group-hover:shadow-[0_0_28px_rgba(105,243,238,0.24)]'
                >
                  <Icon className='h-6 w-6' />
                </div>

                <h3
                  className="relative mt-6 font-['Sora'] text-xl font-semibold text-white"
                >
                  {service.title}
                </h3>

                <p 
                  className='relative mt-4 text-sm leading-7 text-slate-400'
                >
                  {service.description}
                </p>

              </MotionArticle>
            )

          })}

        </div>

      </div>
    </section>
  )
}

export default Services