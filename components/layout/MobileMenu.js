
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
                    <li className="menu-item menu-item-has-children menu-current-item">
                        <Link href="/#">Home</Link>
                        <span className={isActive.key == 1 ? "arrow active" : "arrow"} onClick={() => handleToggle(1)} />
                    </li>
                    <li className="menu-item menu-item-has-children">
                        <Link href="/#">Explore</Link>
                        <span className={isActive.key == 2 ? "arrow active" : "arrow"} onClick={() => handleToggle(2)} />
                        <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                            <li className="menu-item"><Link href="/nft">NFTs</Link></li>
                            <li className="menu-item"><Link href="/blog">Blog List</Link></li>
                            <li className="menu-item"><Link href="/blog-details">Blog Details</Link></li>
                            <li className="menu-item"><Link href="/vision-mission">Visions &amp;
                                Mission</Link></li>
                            <li className="menu-item"><Link href="/help-center">Help Center</Link></li>
                            <li className="menu-item"><Link href="/parti-asset">Participants &amp;
                                Assets</Link></li>
                            <li className="menu-item"><Link href="/advisor">Advisors &amp; Backers</Link></li>
                            <li className="menu-item"><Link href="/partner">Partners &amp; Investors</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="menu-item">
                        <Link href="/roadmap">RoadMap</Link>
                    </li>
                    <li className="menu-item">
                        <Link href="/team">Team</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
