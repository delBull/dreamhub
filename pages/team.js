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
                                            <Link href="/team"><img src="/assets/images/layouts/deltoro.png" alt="" /></Link>
                                            <ul className="list-social">
                                                <li><Link href="https://www.linkedin.com/in/marcodeltoro/" target="_blank">
                                                    <span className="icon-linkedin" />
                                                </Link></li>
                                                <li><Link href="https://twitter.com/mardeltoro" target="_blank">
                                                    <span className="icon-twiter" />
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
                                            <Link href="/team"><img src="/assets/images/layouts/master.jpeg" alt="" /></Link>
                                            <ul className="list-social">
                                                <li><Link href="https://www.linkedin.com/in/eduardokukaramakara/">
                                                    <span className="icon-linkedin" />
                                                </Link></li>
                                             {/*    <li><Link href="#">
                                                    <span className="icon-twiter" />
                                                     </Link></li> */}
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
                                            <Link href="/team"><img src="/assets/images/layouts/oscar.jpeg" alt="" /></Link>
                                            <ul className="list-social">
                                               {/*  <li><Link href="#">
                                                    <span className="icon-linkedin" />
                                                </Link></li> */}
                                                <li><Link href="https://twitter.com/7Trueba">
                                                    <span className="icon-twiter" />
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
                                            <Link href="/team"><img src="/assets/images/layouts/erwin.jpg" alt="" /></Link>
                                          {/*   <ul className="list-social">
                                                <li><Link href="#">
                                                    <span className="icon-linkedin" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-twiter" />
                                                </Link></li>
                                            </ul> */}
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
                                            <Link href="/booking" target="_balnk" className="action-btn" style={{ textAlign: 'center'}}><span>Agenda tu Asesoría</span></Link>
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