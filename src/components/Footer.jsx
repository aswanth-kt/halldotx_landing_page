
const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">

      <div 
        className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"
      >

        <div>

          <p className="font-['Sora] text-base font-semibold text-white">
            Hall Dotx
          </p>

          <p className="mt-1">
            Premium digital foundations for modern growth.
          </p>

        </div>

        <p>
          © {year} Hall Dotx. All rights reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer