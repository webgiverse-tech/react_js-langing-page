import { useState } from 'react'
import { logoApp } from '../assets/index'
import Button from './Button'
import Container from './Container'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { id: "0", label: "Features", href: "/features" },
    { id: "1", label: "Pricing", href: "./.#pricing" },
    { id: "2", label: "About", href: "/about" },
    { id: "3", label: "Blog", href: "/blog" },
    { id: "4", label: "Contact", href: "/contact" }
  ]

  return (
    <header className='border-b border-stroke-1 sticky top-0 z-50 bg-n-9 bg-opacity-95 backdrop-blur'>
      <Container className='relative'>
        <div className='flex items-center justify-between py-4 lg:py-6'>
          {/* Logo */}
          <a href="/" className='flex items-center gap-2'>
            <img src={logoApp} width={100} height={30} alt="App-logo" />
          </a>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center gap-8'>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className='body-2 text-n-3 hover:text-white transition duration-300'
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className='hidden lg:flex items-center gap-4'>
            <Button theme="secondary" href="/#">
              Login
            </Button>
            <Button theme="primary" href="/#">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='lg:hidden flex flex-col gap-1.5 p-2'
          >
            <span className={`w-6 h-0.5 bg-white transition duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className='lg:hidden absolute top-full left-0 right-0 bg-n-8 border-b border-stroke-1 animate-in fade-in slide-in-from-top-2'>
            <div className='flex flex-col gap-4 p-6'>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className='body-2 text-n-3 hover:text-white transition duration-300 py-2'
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <div className='flex flex-col gap-3 pt-4 border-t border-stroke-1'>
                <Button theme="secondary" href="/#" className='w-full text-center'>
                  Login
                </Button>
                <Button theme="primary" href="/#" className='w-full text-center'>
                  Get Started
                </Button>
              </div>
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}

export default Header
