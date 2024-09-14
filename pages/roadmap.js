import Accordion from '../components/elements/Accordion'
import Layout from '../components/layout/Layout'
import Link from "next/link"
import RoadmapSlider1 from '../components/sections/Roadmap1'
export default function Roadmap() {

    return (
        <>
            <Layout headerStyle={1} big footerStyle={1} breadcrumbTitle="El Viaje De Dreamhub">
            <section id="roadmap" className="roadmap s2">
                <div className="shape" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="roadmap__main s1">
                                <RoadmapSlider1 />
                                {/* <div className="icon"></div>
                  <div className="icon bottom"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>      
                    <div style={{ height: '100px' }}></div>
                    <section id="faq" className="faq s3">
                        <div className="shape" />
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-md-12">
                                    <div className="block-text">
                                        <h6 className="sub-heading"><span>FAQs</span></h6>
                                        <h3 className="heading">Preguntas
                                            <br />
                                            Frecuentes</h3>
                                    </div>
                                    <Accordion oneCol/>
                                </div>
                                <div className="col-xl-6 col-md-12">
                                    <div className="image">
                                        <img src="/assets/images/layouts/quetzaAlado.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: '100px' }}></div>
                    </section>
                    </Layout>
        </>
    )
}