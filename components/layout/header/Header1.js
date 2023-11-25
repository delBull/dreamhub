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
                                            <Link href="/">Servicios</Link>
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                               <h6>Explora</h6>
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
                                    <div className="mobile-button" onClick={handleMobileMenu}><span /></div>
                                </div>
                                <div className="header__action">
                                    <Link href="/" className="action-btn"><span>Agenda para Tokenizar</span></Link>
                                    <Link href="/" className="action-btn"><span>dApp</span></Link>
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
