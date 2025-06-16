import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white py-4 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-gray-900">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold">
            CP
          </div>
          ChantirPro
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
            Services
          </Link>
          <Link href="#process" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
            Notre Process
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
            Témoignages
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:0756938421" className="hidden sm:flex items-center gap-2 font-semibold text-gray-700 hover:text-blue-600">
            📞 07 56 93 84 21
          </a>
          <Link href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
            Devis Gratuit
          </Link>
        </div>
      </nav>
    </header>
  )
}