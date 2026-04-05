import { useRef, useState } from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaFacebook, } from "react-icons/fa"
import { IoMail } from "react-icons/io5"
import { sendEmail } from "../services/emailService";

const Contact = () => {

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [infoMessage, setInfoMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      const res = await sendEmail(formRef.current);

      console.log("Email sent res:", res);

      if (res.status === 200) {
        setInfoMessage({
          msg: "Message sent successfully",
          color: "green"
        })
      }
      
    } catch (error) {
      console.error("Error at email send:", error);
      setInfoMessage({
        msg: error || "Message not sent",
        color: "red"
      })

    } finally {
      setLoading(false)
      e.target.reset()
    }
  }

  const phoneNum = "7560990989";
  const message = encodeURIComponent("Hello Hall Dotx Technologies! I'm interested in your web services. Could you provide more information on how you can help my business?");
  const whatsappUrl = `https://wa.me/${phoneNum}?text=${message}`;

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

            <a
             href={whatsappUrl}
             target="_blank"
             rel="noreferrer"
             className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/6 text-slate-100 transition duration-300 hover:border-[rgba(151,255,251,0.22)] hover:text-[var(--teal-strong)]"
             aria-label="Whatsapp"
            >
             <FaWhatsapp className="h-5 w-5" />
            </a>

            <a
             href="mailto:hdxcareers@gmail.com"
             target="_blank"
             rel="noreferrer"
             className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/6 text-slate-100 transition duration-300 hover:border-[rgba(151,255,251,0.22)] hover:text-[var(--teal-strong)]"
             aria-label="Email"
            >
             <IoMail className="h-5 w-5" />
            </a>

            <a
             href="#"
             target="_blank"
             rel="noreferrer"
             className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/6 text-slate-100 transition duration-300 hover:border-[rgba(151,255,251,0.22)] hover:text-[var(--teal-strong)]"
             aria-label="Facebook"
            >
             <FaFacebook className="h-5 w-5" />
            </a>

          </div>

        </div>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid gap-4"  
        >

          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-300">
              Name
            </span>
            <input 
              type="text" 
              name="name"
              required
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
              name="email"
              required
              placeholder="you@company.com"
              className="rounded-2xl border border-white/10 bg-[rgba(3,10,12,0.8)] px-4 py-3.5 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-[rgba(151,255,251,0.35)] focus:shadow-[0_0_0_4px_rgba(105,243,238,0.08)]"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-300">
              Message
            </span>
            <textarea 
              name="message"
              required
              rows="6"
              placeholder="Tell us about your project"
              className="rounded-2xl border border-white/10 bg-[rgba(3,10,12,0.8)] px-4 py-3.5 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-[rgba(151,255,251,0.35)] focus:shadow-[0_0_0_4px_rgba(105,243,238,0.08)]"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 inline-flex items=center justify-center rounded-full border border-[rgba(151,255,251,0.2)] bg-[linear-gradient(135deg,#6af5ef,#1c807d)] px-6 py-3.5 font-semibold text-slate-950 shadow-[0_0_28px_rgba(106,245,239,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow[0_0_40px_rgba(106,245,239,0.34)]"
          >
            {loading ? "Message Sending..." : "Send Message"}
          </button>

          <p
            className={`flex ${infoMessage?.color === "red" ? "text-red-500" : "text-green-500"} items-center justify-center`}
          >
            {infoMessage?.msg}
          </p>

        </form>

      </div>
    </section>
  )
}

export default Contact