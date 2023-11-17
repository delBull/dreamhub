
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
                                            <ScrollLink to="tokenización" smooth={true} duration={100}><span>Tokenización</span></ScrollLink>
                                            </li>
                                            <li>
                                            <ScrollLink to="dreamhub" smooth={true} duration={100}><span>Agencia</span></ScrollLink>
                                            </li>
                                            <li>
                                            <ScrollLink to="roadmap" smooth={true} duration={100}><span>Roadmap</span></ScrollLink>
                                            </li>
                                            <li>
                                            <ScrollLink to="faq" smooth={true} duration={100}><span>FAQs</span></ScrollLink>
                                           </li>
                                           {/*   <li className="menu-item menu-item-has-children">
                                               {/* <Link href="#">Explora</Link> 
                                                <ul className="sub-menu">                                                
                                                   <li className="menu-item"><Link href="/vision-mission">Dreamhub</Link></li>
                                                    <li className="menu-item"><Link href="/about">Tokenización</Link></li> 
                                                </ul>
                                            </li> */}
                </ul>
            </nav>
        </>
    )
}
