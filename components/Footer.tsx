export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl text-text-primary">
              T<span className="text-primary">.</span>S
            </span>
            <span className="text-text-light text-sm">
              &copy; {new Date().getFullYear()} Thiago Schneider
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
