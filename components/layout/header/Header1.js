import Link from "next/link"
import MobileMenu from "../MobileMenu"
import React, { useState } from 'react';
import { Tooltip } from 'primereact/tooltip';
        
export default function Header1({ scroll, isMobileMenu, handleMobileMenu, big }) {
    const [count, setCount] = useState(0);

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
                                            <h6>Servicios</h6>
                                            <ul className="sub-menu">                                                
                                                   <li><p style={{color: 'black'}}>Consultoría de Negocios</p></li>
                                                    <li><p style={{color: 'black'}}>Asesoría Financiera</p></li>
                                                   <li><p style={{color: 'black'}}>Capacitación Integral</p></li>  
                                                    <li><p style={{color: 'black'}}>Diseño Estratégico NFTs</p></li>
                                                    <li><p style={{color: 'black'}}>Diseño Artístico NFTs</p></li>
                                                    <li><p style={{color: 'black'}}>Campañas de Fidelización</p></li>
                                                    <li><p style={{color: 'black'}}>Programa de Puntos</p></li>  
                                                    <li><p style={{color: 'black'}}>NFT Marketign en web3</p></li>
                                                    <li><p style={{color: 'black'}}>NFT Branding en web3</p></li>
                                                    <li><p style={{color: 'black'}}>NFT Fundraising en web3</p></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-has-children explore" >
                                               <h6>Explora</h6>
                                                <ul className="sub-menu">                                                
                                                   <li className="menu-item"><Link href="/blockchain">Blockchain</Link></li>
                                                    <li className="menu-item"><Link href="/roadmap">Roadmap</Link></li>
                                                    <li className="menu-item"><Link href="/help-center">Hub de Ayuda</Link></li>
                                                    {/* <li className="menu-item"><Link href="https://agodecosystem.com" target="_blank">Ecosistema</Link></li>*/}
                                                </ul>
                                                <Tooltip target=".explore" style={{padding: 10}} mouseTrack mouseTrackLeft={15} />
                                            </li>
                                            <li>
                                            <Link href="/team">Team</Link>
                                            </li>
                                            <li className="blog"  data-pr-tooltip="coming soon" data-pr-position="bottom">
                                            <Link href="#">Blog</Link>
                                            </li>
                                            <Tooltip target=".blog" />
                                        </ul>
                                    </nav>
                                    <div className="mobile-button" onClick={handleMobileMenu}><span /></div>
                                </div>
                                <div className="header__action">
                                    <Link href="/booking" className="action-btn" target="_blank"><span>Agenda para Tokenizar</span></Link>
                                    <Link href="#" className="action-btn dapp" data-pr-tooltip="coming soon" data-pr-position="bottom"><span>dApp</span></Link>
                                    <Tooltip target=".dapp" />
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
