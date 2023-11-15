import Link from "next/link"
import MobileMenu from "../MobileMenu"
import { Link as ScrollLink } from 'react-scroll';

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, big }) {
    return (
        <>
            <header id="header_main" className={`header ${scroll ? "is-fixed is-small" : ""}`}>
                <div className={`container ${big ? "big" : ""}`}>
                    <div className="row">
                        <div className="col-12">
                            <div className="header__body">
                                <div className="header__logo">
                                    <Link href="/">
                                        <img id="site-logo" src="/assets/images/logo/logo.png" alt="Peson" width={160} height={38} data-retina="assets/images/logo/logo@2x.png" data-width={160} data-height={38} />
                                    </Link>
                                </div>
                                <div className="header__right">
                                    <nav id="main-nav" className="main-nav">
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
                                            <li className="menu-item menu-item-has-children">
                                               {/* <Link href="#">Explora</Link> */}
                                                <ul className="sub-menu">                                                
                                                   <li className="menu-item"><Link href="/vision-mission">Dreamhub</Link></li>
                                                    <li className="menu-item"><Link href="/about">Tokenización</Link></li> 
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="mobile-button" onClick={handleMobileMenu}><span /></div>
                                </div>
                                <div className="header__action">
                                    <Link href="/contact" className="action-btn"><span>Agenda para Tokenizar</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MobileMenu isMobileMenu={isMobileMenu} />
            </header>

        </>
    )
}
