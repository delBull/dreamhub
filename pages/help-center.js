import Accordion from "@/components/elements/Accordion"
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import React, { useRef, useState } from 'react';
export default function HelpCenter() {
    const [visible, setVisible] = useState(false); 

    return (
        <>
            <Layout headerStyle={1} big footerStyle={1} breadcrumbTitle="Hub de Ayuda">
                <div className="page-help">
                    <section className="faq">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h6 className="sub-heading"><span>FAQs</span></h6>
                                        <h3 className="heading">Esperamos que encuentres
                                            <br />
                                            lo que estás buscando.</h3>
                                        <p className="mb-17">A continuación, se presenta una lista de preguntas frecuentes y respuestas.</p>
                                    </div>
                                    <Accordion />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="watch-video">
                        <div className="shape" />
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h3 className="heading">La Creatividad Es La Clave Del Éxito</h3>
                                    </div>
                                    <div className="watch-video__main" style={{ textAlign: 'center'}}>
                                    <h5>Mira el video</h5>
                                    <div style={{ height: '10px' }}></div>
            <Button className="action-btn" onClick={() => setVisible(true)}><svg viewBox="0 0 1024 1024" fill="currentColor" height="6em" width="10em">
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
            <path d="M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z" />
            </svg></Button>
            <Dialog className="video-container" header="" visible={visible} style={{ width: '160vh', height: 'auto' }} onHide={() => setVisible(false)}>
            <video autoPlay controls>
            <source media="(min-width: 600px)" src="assets/videos/intro_web.mp4" type="video/mp4"/>
            <source media="(max-width: 599px)" src="assets/videos/intro_mobile.mp4" type="video/mp4"/>
            </video>
            </Dialog>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '100px' }}></div>
                    </section>
                </div>

            </Layout>
        </>
    )
}