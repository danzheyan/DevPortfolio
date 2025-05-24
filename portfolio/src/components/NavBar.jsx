import React, { useEffect } from 'react'
import { navLinks } from '../constants'
import { useState } from 'react'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10 ? setScrolled(true) : setScrolled(false);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll)
    }
    }, [])

   
  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'} }`}>
        <div className="inner">
            <a className="logo" href="#hero">Dan Yang</a>
            <nav className="desktop">
                <ul className="flex gap-10">
                    { navLinks.map(({ link, name }) => (
                        <li key={link} className="group">
                            <a href={link}>
                                <span>{name}</span>
                                <span className="underline" />
                            </a>
                        </li>
                    )) }
                   
                </ul>
            </nav>
            <a href="#contact" className="contact-btn group">
                <div className="inner">
                    <span>Contact Me</span>
                </div>

            </a>

        </div>
    </header>
  )
}

export default NavBar