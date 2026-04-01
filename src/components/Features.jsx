import { 
  Gauge,
  Headphones,
  Rocket, 
  SearchCheck
} from 'lucide-react'


const features = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Efficient workflows and focused sprints help us deliver quickly without cutting corners."
  },
  {
    icon: Gauge,
    title: "Scalable Solution",
    description: "Build systems and layouts that grow with your team, traffic, and future product goals."
  },
  {
    icon: SearchCheck,
    title: "SEO Optimized",
    description: "Structured for speed, search visibility, and long-term performance from day one."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Consistent support to keep your product running smoothly and updated."
  },
];

const Features = () => {
  return (
    <section 
      id='about'
      className='px-4 py-24 sm:px-6 lg:px8'
    >
      <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]'>

        <div>

          <p 
            className="font-['Sora'] text-sm font-semibold uppercase tracking-[0.35em] text-[var(--teal-strong)]"
          >
            Why Choose Us
          </p>

          <h2
            className='mt-4 text-3xl font-semibold text-white sm:text-4xl'
          >
            We design with purpose and build for performance.
          </h2>

          <p
            className='mt-5 max-w-xl text-lg leading-8 text-slate-400'
          >
            We don't just create good-looking websites.
            We build fast, scalable, and reliable digital products that support your business growth, improve visibility, and deliver real user value.
          </p>

        </div>

        <div className='grid gap-5 sm:grid-cols-2'>
          {features.map((feature) => {
            const Icon = feature.icon

            return(
              <div
                key={feature.title}
                className='group rounded-[1.6rem] border border-white/10 bg-[var(--panel)] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[rgba(151,255,251,0.22)] hover:shadow-[0_0_28px_rgba(105,243,238,0.12)]'
              >
                
                <div
                  className='flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[rgba(105,243,238,0.08)] text-[var(--teal-strong)]'
                >
                  <Icon />
                </div>

                <h3 className="mt-5 font-['Sora'] text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>

              </div>
            )

          })}
        </div>

      </div>
    </section>
  )
}

export default Features