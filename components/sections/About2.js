import Link from "next/link"
import BrandSlider1 from "../slider/BrandSlider1"


export default function About2() {
    return (
        <>
            <section className="about s2">
                <div className="shape" />
                <div className="shape right" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center pd-0">
                                <h6 className="sub-heading"><span>Dreamhub</span></h6>
                                <h3 className="heading wow" data-splitting>Transforma tus Sueños</h3>
                            </div>
                            <div className="about__main center" data-aos="fade-up" data-aos-duration={3000}>
                                <img src="/assets/images/layouts/about-06.png" alt="" />
                                <p className="mb-17">DreamHub es una plataforma que está liderando la revolución de la tokenización.</p>
                                <p className="mb-30">Conectamos a empresas y emprendedores con el emocionante mundo de los NFTs (Tokens No Fungibles) y la economía digital, brindando oportunidades únicas para transformar activos en tokens digitales.</p>
                                <Link ahref="/about" className="action-btn" href="#"><span>Nuestro Ecosistema</span></Link>
                            </div>
                            <div className="brands s2 block-text center pd-0">
                                <h6 className="sub-heading"><span>Patrocinadores y Colaboradores</span></h6>
                                <div className="swiper brands-swiper">
                                    <BrandSlider1 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
