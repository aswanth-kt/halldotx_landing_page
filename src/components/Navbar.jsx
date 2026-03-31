import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";


const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Logo = () => {
  return (

    <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 shadow-[0_0_30px_rgba(104,255,244,0.2)] backdrop-blur-md">

      <div className="absolute inset-1 rounded-[1rem] bg-[radial-gradient(circle_at_top,rgba(105,243,238,0.22),transparent_65%)]" />

      <img src={logo} className="rounded-full" alt="logo" />

    </div>

  )
};


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-30 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/6 px-4 py-3 backdrop-blur-xl shadow-[0_15px_50px_rgba(0,0,0,0.35)] sm:px-6">

        <div className="flex items-center justify-between gap-4">

          <div className="flex min-w-0 items-center gap-3">
            <Logo />
            <div className="min-w-0">

              <p 
                className="truncate font-['Sora'] text-sm font-semibold uppercase tracking-[0.35rem] text-[var(--teal-strong)]"
              >
                Hall Dotx
              </p>

              <p className="truncate text-xs text-[var(--muted)]">
                Digital systems for ambitious brands
              </p>

            </div>
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-200 transition duration-300 hover:text-[var(--teal-strong)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div>
            <a 
              href="#contact"
              className="hidden lg:inline-flex rounded-full border border-[rgba(151,255,251,0.28)] bg-[linear-gradient(135deg,rgba(105,243,238,0.2),rgba(255,255,255,0.08))] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(92,239,233,0.18)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(92,239,233,0.28)]"
            >
              Start Project
            </a>
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-slate-100 transition hover:border-[rgba(151,255,251,0.24)] hover:text-[var(--teal-strong)] lg:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>

         {/* Responsive Menu */}
        <div
          className={`grid overflow-hidden transition-all duration-300 lg:hidden ${
              isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opasity-0"
            }`}
        >
            <div className="min-h-0">
              <div className="space-y-3 rounded-[1.5rem] border border-white/10 bg-[rgba(3,10,12,0.82)] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

                {links.map((link) => (

                  <a
                    key={link.label}
                   href={link.href}
                   onClick={handleLinkClick}
                   className="block rounded-2xl border border-transparent bg-white/0 px-4 py-3 text-sm font-medium text-slate-200 transition duration-300 hover:border-[rgba(151,255,251,0.14)] hover:bg-white/6 hover:text-[var(--teal-strong)]"
                  >
                    {link.label}
                  </a>

                ))}

                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="inline-flex w-full items-center justify-center rounded-full border border-[rgba(151,255,251,0.28)] bg-[linear-gradient(135deg,rgba(105,243,238,0.24),rgba(255,255,255,0.08))] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(92,239,233,0.18)] transition duration-300 hover:shadow-[0_0_30px_rgba(92,239,233,0.28)]"
                >
                  Start Project
                </a>

              </div>
            </div>
        </div>

      </nav>
    </header>
  )
}

export default Navbar