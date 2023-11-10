import Link from "next/link"


export default function About3() {
    return (
        <>
            <section className="about s3">
                <div className="shape" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="block-text pd-0">
                                <h6 className="sub-heading"><span>Dreamhub</span></h6>
                                <h3 className="heading wow" data-splitting>Transforma tus sueños</h3>
                                <p className="mb-17">DreamHub es una plataforma que está liderando la revolución de la tokenización.</p>
                                <p className="mb-26">Conectamos a empresas y emprendedores con el emocionante mundo de los NFTs (Tokens No Fungibles) y la economía digital, brindando oportunidades únicas para transformar activos en tokens digitales</p>
                                <Link href="/about" className="action-btn"><span>Nuestro Ecosistema</span></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="about__right" data-aos="fade-left" data-aos-duration={2000}>
                                <div className="card-box">
                                    <div className="top d-flex">
                                        <span className="icon-logo-01" />
                                        <div>
                                            <h6>3D Digital Artwork</h6>
                                            <h6 className="price">2.26 ETH</h6>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="image">
                                            <img src="/assets/images/layouts/banner-04.png" alt="" />
                                        </div>
                                        <div className="info d-flex">
                                            <img src="/assets/images/layouts/avt-07.png" alt="" />
                                            <div>
                                                <h6 className="name">Leslie Alexander</h6>
                                                <p>@leslie754</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-box sm">
                                    <div className="top d-flex">
                                        <span className="icon-logo-01" />
                                        <div>
                                            <h6>3D Digital Artwork</h6>
                                            <h6 className="price">2.26 ETH</h6>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="image">
                                            <img src="/assets/images/layouts/banner-05.png" alt="" />
                                        </div>
                                        <div className="info d-flex">
                                            <img src="/assets/images/layouts/avt-07.png" alt="" />
                                            <div>
                                                <h6 className="name">Leslie Alexander</h6>
                                                <p>@leslie754</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
