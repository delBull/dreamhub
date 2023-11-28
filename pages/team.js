import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Team() {

    return (
        <>
            <Layout headerStyle={1} big footerStyle={1} breadcrumbTitle="El Team">
            <div className="page-team">
                    <section className="team s2">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h6 className="sub-heading"><span>Equipo del Hub</span></h6>
                                        <h3 className="heading">Our Amazing Team
                                            <br />
                                            Members</h3>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="team-box">
                                        <div className="image">
                                            <Link href="/team"><img src="/assets/images/layouts/marco.jpg" alt="" /></Link>
                                            <ul className="list-social">
                                                <li><Link href="#">
                                                    <span className="icon-facebook" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-twiter" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-plan" />
                                                </Link></li>
                                            </ul>
                                        </div>
                                        <div className="content">
                                            <Link href="/team" className="h5 name">Marco Del Toro</Link>
                                            <p className="postion">
                                                Founder &amp; CEO
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="team-box">
                                        <div className="image">
                                            <Link href="/team"><img src="/assets/images/layouts/edu.png" alt="" /></Link>
                                            <ul className="list-social">
                                                <li><Link href="#">
                                                    <span className="icon-facebook" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-twiter" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-plan" />
                                                </Link></li>
                                            </ul>
                                        </div>
                                        <div className="content">
                                            <Link href="/team" className="h5 name">Eduardo Herrera</Link>
                                            <p className="postion">
                                                Designer & Marketing Expert
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="team-box">
                                        <div className="image">
                                            <Link href="/team"><img src="/assets/images/layouts/oscar.png" alt="" /></Link>
                                            <ul className="list-social">
                                                <li><Link href="#">
                                                    <span className="icon-facebook" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-twiter" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-plan" />
                                                </Link></li>
                                            </ul>
                                        </div>
                                        <div className="content">
                                            <Link href="/team" className="h5 name">Oscar Trueba</Link>
                                            <p className="postion">
                                                Copy & Tokenomics Expert
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="team-box">
                                        <div className="image">
                                            <Link href="/team"><img src="/assets/images/layouts/erwin.png" alt="" /></Link>
                                            <ul className="list-social">
                                                <li><Link href="#">
                                                    <span className="icon-facebook" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-twiter" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-plan" />
                                                </Link></li>
                                            </ul>
                                        </div>
                                        <div className="content">
                                            <Link href="/team" className="h5 name">Erwin Mayoral</Link>
                                            <p className="postion">
                                                Operations & Real Estate Expert
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="create">
                        <div className="shape" />
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="create__main">
                                        <div className="content">
                                            <h4 className="heading">Crea tu portafolio</h4>
                                            <p>Cuéntanos acerca de tu proyecto y te asesoraremos <br/>
                                            para llevarlo al mundo Web3 y la tokenización.</p>
                                            <Link href="/contact" className="action-btn" style={{ textAlign: 'center'}}><span>Agenda tu Asesoría</span></Link>
                                        </div>
                                        <img className="mobile-none" src="/assets/images/layouts/create.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}