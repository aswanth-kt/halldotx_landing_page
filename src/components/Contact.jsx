// import { Linkedin } from "lucide-react";


const Contact = () => {
  return (
    <section
      id="contact"
      className="px-4 py-24 sm:px-6 lg:px-8"
    >
      <div
        className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8 lg:grid-clos-[0.88fr_1.12fr] lg:p-10"
      >

        <div>
          
          <p className="font-['Sora'] text-sm font-semibold uppercase tracking-[0.35em] text-[var(--teal-strong)]">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Let's shape a digital presence that feels ahead of the curve.
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
            Share your project, goals, or growth plans. W'ill help map the right design, development, and marketing foundation for the next stage of your business.
          </p>

          <div className="mt-8 flex gap-4">

            <a
             href="https://www.linkedin.com/company/hall-dot-x/posts/?feedView=all"
             target="_blank"
             rel="noreferrer"
             className="inline-flex h-12 w-12 items-center justify-center"
             aria-label="Linkedin"
            >
             {/* <Linkedin className='h-12 w-12' /> */}
             Linkedin
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact