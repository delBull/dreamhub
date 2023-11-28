
import Link from 'next/link'
import { useState } from 'react'
export default function MobileMenu({ isMobileMenu }) {

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <nav id="main-nav-mobi" className="main-nav" style={{ display: `${isMobileMenu ? "block" : "none"}` }}>
                <ul id="menu-primary-menu" className="menu">
                                            <li>
                                            <Link href="/index.html">Inicio</Link>
                                            </li>
                                            <li>
                                            <Link href="/">Servicios</Link>
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                            <Link href="#">Explora</Link>
                                                <ul className="sub-menu">                                                
                                                   <li className="menu-item"><Link href="/blockchain">Blockchain</Link></li>
                                                    <li className="menu-item"><Link href="/roadmap">Roadmap</Link></li>
                                                    <li className="menu-item"><Link href="/help-center">Hub de Ayuda</Link></li>  
                                                    <li className="menu-item"><Link href="https://agodecosystem.com" target="_blank" >Ecosistema</Link></li> 
                                                </ul>
                                            </li>
                                            <li>
                                            <Link href="/team">Team</Link>
                                            </li>
                                            <li>
                                            <Link href="https://agodecosystem.medium.com" target='_blank'>Blog</Link>
                                            </li>
                </ul>
            </nav>
        </>
    )
}
