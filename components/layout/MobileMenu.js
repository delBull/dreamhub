
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
                    <li className="menu-item">
                        <Link href="/#">Inicio</Link>
                    </li>
                    <li className="menu-item menu-item-has-children">
                        <Link href="/#">Explora</Link>
                        <span className={isActive.key == 2 ? "arrow active" : "arrow"} onClick={() => handleToggle(2)} />
                        <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                            <li className="menu-item"><Link href="/vision-mission">Dreamhub</Link></li>
                            <li className="menu-item"><Link href="/about">Tokenización</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    )
}
