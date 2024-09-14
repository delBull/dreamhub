import Link from "next/link"


export default function About1() {
    return (
        <>
            <section className="about">
                <div className="shape" />
                <div className="container">
                    <div className="row rev">
                        <div className="col-xl-6 col-md-12">
                            <div className="about__right">
                                <div className="images">
                                    <img className="img1" src="/assets/images/layouts/about-01.png" alt="" />
                                    <img className="img2" src="/assets/images/layouts/about-01.png" alt="" />
                                    <img className="img3" src="/assets/images/layouts/about-03.png" alt="" />
                                    <img className="img4" src="/assets/images/layouts/about-04.png" alt="" />
                                    <img className="img5" src="/assets/images/layouts/about-05.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="block-text">
                                <h6 className="sub-heading"><span>Dreamhub</span></h6>
                                <h3 className="heading wow" data-splitting>Transforma tus Sueños</h3>
                                <p className="mb-17">DreamHub es una plataforma que está liderando la revolución de la tokenización.</p>
                                <p className="mb-26">Conectamos a empresas y emprendedores con el emocionante mundo de los NFTs (Tokens No Fungibles) y la economía digital, brindando oportunidades únicas para transformar activos en tokens digitales.</p>
                                <Link href="/about" className="action-btn"><span>Nuestro Ecosistema</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
