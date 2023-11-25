
import Link from 'next/link'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll';
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
                                            <Link href="/">Inicio</Link>
                                            </li>
                                            <li>
                                            <Link href="/">Servicios</Link>
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                            <Link href="#">Explora</Link>
                                                <ul className="sub-menu">                                                
                                                   <li className="menu-item"><Link href="/">Nosotros</Link></li>
                                                    <li className="menu-item"><Link href="/">Blockchain</Link></li>
                                                    <li className="menu-item"><Link href="/">Tokenización</Link></li>  
                                                    <li className="menu-item"><Link href="/">NFTs</Link></li> 
                                                    <li className="menu-item"><Link href="/">Roadmap</Link></li>
                                                    <li className="menu-item"><Link href="/">FAQs</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                            <Link href="/">Blog</Link>
                                            </li>
                </ul>
            </nav>
        </>
    )
}
