import { FaLinkedin, FaInstagram } from "react-icons/fa"

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-4 py-24 sm:px-6 lg:px-8"
    >
      <div
        className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:p-10"
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
             className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/6 text-slate-100 transition duration-300 hover:border-[rgba(151,255,251,0.22)] hover:text-[var(--teal-strong)]"
             aria-label="Linkedin"
            >
             <FaLinkedin className="h-5 w-5" />
            </a>

            <a
             href="https://www.instagram.com/halldotx?igsh=MzNxZXI0MGh6YWJn"
             target="_blank"
             rel="noreferrer"
             className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/6 text-slate-100 transition duration-300 hover:border-[rgba(151,255,251,0.22)] hover:text-[var(--teal-strong)]"
             aria-label="Instagram"
            >
             <FaInstagram className="h-5 w-5" />
            </a>

          </div>

        </div>

        <form className="grid gap-4">

          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-300">
              Name
            </span>
            <input 
              type="text" 
              placeholder="Your name"
              className="rounded-2xl border border-white/10 bg-[rgba(3,10,12,0.8)] px-4 py-3.5 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-[rgba(151,255,251,0.35)] focus:shadow-[0_0_0_4px_rgba(105,243,238,0.08)]"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-300">
              Email
            </span>
            <input 
              type="email" 
              placeholder="you@company.com"
              className="rounded-2xl border border-white/10 bg-[rgba(3,10,12,0.8)] px-4 py-3.5 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-[rgba(151,255,251,0.35)] focus:shadow-[0_0_0_4px_rgba(105,243,238,0.08)]"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-300">
              Message
            </span>
            <textarea 
              rows="6"
              placeholder="Tell us about your project"
              className="rounded-2xl border border-white/10 bg-[rgba(3,10,12,0.8)] px-4 py-3.5 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-[rgba(151,255,251,0.35)] focus:shadow-[0_0_0_4px_rgba(105,243,238,0.08)]"
            />
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex items=center justify-center rounded-full border border-[rgba(151,255,251,0.2)] bg-[linear-gradient(135deg,#6af5ef,#1c807d)] px-6 py-3.5 font-semibold text-slate-950 shadow-[0_0_28px_rgba(106,245,239,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow[0_0_40px_rgba(106,245,239,0.34)]"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  )
}

export default Contact