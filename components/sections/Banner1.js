import Link from "next/link"


export default function Banner1() {
    return (
        <>
            <section className="banner">
                <div className="shape right" />
                <div className="container big">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="banner__left">
                                <div className="block-text">
                                    <h2 className="heading">Transfórmate: <span className="s1 arlo_tm_animation_text_word" /> <br />
                                    Conécta con el futuro</h2>
                                    <p className="desc">Con DreamHub, el futuro de la tokenización está al alcance de tu mano</p>
                                    <Link href="/contact" className="action-btn"><span>Empieza aquí</span></Link>
                                </div>
                                <div className="pay">
                                    <h6>Todos somos crypto</h6>
                                    <div className="list">
                                        <p>Aceptamos:</p>
                                        <ul>
                                            <li><Link href="#"><span className="icon-logo-01" /></Link></li>
                                            <li><Link href="#"><span className="icon-logo-02" /></Link></li>
                                            <li><Link href="#"><span className="icon-logo-03" /></Link></li>
                                            <li><Link href="#"><span className="icon-logo-04" /></Link></li>
                                            <li><Link href="#"><span className="icon-logo-05"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span></Link></li>
                                            <li><Link href="#"><span className="icon-logo-06" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="banner__right">
                                <div className="image">
                                    <img src="/assets/images/layouts/banner.png" alt="" />
                                </div>
                                <div className="price">
                                    <div className="icon">
                                        <img src="/assets/images/icon/icon-01.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <p>Current Bid</p>
                                        <h5>2.26 ETH</h5>
                                    </div>
                                </div>
                                <div className="owner">
                                    <div className="image">
                                        <img src="/assets/images/layouts/avt-01.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>Leslie Alexander</h5>
                                        <p>@leslie754</p>
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
