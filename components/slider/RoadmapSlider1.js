
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1450: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
}
export default function RoadmapSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="swiper roadmap-swiper">
                <SwiperSlide>
                <div className="roadmap-box">
                                            <div className="time">Q2, 2023</div>
                                            <div className="content">
                                                <h5 className="title">La idea de Dreamhub nace.</h5>
                                                <p className="text">Un equipo interdisciplinario comienza a explorar la viabilidad de la plataforma.</p>
                                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="roadmap-box">
                                            <div className="time">Q2 P2, 2023</div>
                                            <div className="content">
                                                <h5 className="title">Desarrollo Inicial</h5>
                                                <p className="text">Se lleva a cabo una investigación de mercado y se identifican oportunidades en el mundo de la tokenización.</p>
                                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="roadmap-box">
                                            <div className="time">Q2 P3, 2023</div>
                                            <div className="content">
                                                <h5 className="title">Estructura y Plan</h5>
                                                <p className="text">Se estructura un plan de negocios y se inician conversaciones con inversores potenciales.</p>
                                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="roadmap-box">
                                            <div className="time">Q3, 2023</div>
                                            <div className="content">
                                                <h5 className="title">Preparación para el Despegue</h5>
                                                <p className="text">La plataforma Dreamhub se concibe y se desarrolla el MVP (Producto Mínimo Viable).</p>
                                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="roadmap-box">
                                            <div className="time">Q4, 2023</div>
                                            <div className="content">
                                                <h5 className="title">Todo listo</h5>
                                                <p className="text">Se aseguran los primeros clientes y se completan las pruebas de concepto.</p>
                                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="roadmap-box">
                                            <div className="time">Q1, 2024</div>
                                            <div className="content">
                                                <h5 className="title">Despegue</h5>
                                                <p className="text">Lanzamiento oficial. Se realizan las primeras transacciones y se prueban los procesos de tokenización.</p>
                                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="roadmap-box">
                                            <div className="time">Q1 P2, 20244</div>
                                            <div className="content">
                                                <h5 className="title">Desarrollo</h5>
                                                <p className="text">Se mejoran las características de la plataforma y se establece una base de usuarios inicial.</p>
                                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="roadmap-box">
                                            <div className="time">Q2, 2024</div>
                                            <div className="content">
                                                <h5 className="title">Expansión</h5>
                                                <p className="text">Se amplía la oferta de servicios de tokenización de Dreamhub, incluyendo activos como propiedades, obras de arte, bienes raíces y más.</p>
                                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="roadmap-box">
                                            <div className="time">Q2 P2, 20244</div>
                                            <div className="content">
                                                <h5 className="title">El Futuro de la Agencia</h5>
                                                <p className="text">Dreamhub introduce nuevas tecnologías y procesos para mejorar la eficiencia de la tokenización. Se establecen alianzas estratégicas con socios comerciales.</p>
                                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="roadmap-box">
                                            <div className="time">Q3, 2024</div>
                                            <div className="content">
                                                <h5 className="title">Alcance Global</h5>
                                                <p className="text">Dreamhub se expande a nivel global, atrayendo a clientes y socios en todo el mundo.</p>
                                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="roadmap-box">
                                            <div className="time">Q3 P2, 20244</div>
                                            <div className="content">
                                                <h5 className="title">Crecimiento Continuo</h5>
                                                <p className="text">Se incorporan características de tokenización más avanzadas y se refuerzan las relaciones con socios comerciales.</p>
                                            </div>
                    </div>
                </SwiperSlide>

                <div className="swiper-pagination" />
            </Swiper>
            <div className="swiper-button-next">
                <svg width={10} height={15} viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.8788 7.46543L2.43654 13.8092C2.1795 14.0662 1.76387 14.0662 1.50683 13.8092L1.11856 13.4209C0.861521 13.1639 0.861521 12.7482 1.11856 12.4912L6.7131 7.00059L1.12402 1.50997C0.866998 1.25293 0.866998 0.837303 1.12402 0.580281L1.51231 0.191991C1.76933 -0.0650311 2.18496 -0.0650311 2.442 0.191991L8.88422 6.53574C9.1357 6.79278 9.1357 7.20841 8.8788 7.46543Z" fill="white" fillOpacity="0.5" />
                </svg>
            </div>
            <div className="swiper-button-prev">
                <svg width={10} height={15} viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.1212 7.46543L7.56346 13.8092C7.8205 14.0662 8.23613 14.0662 8.49317 13.8092L8.88144 13.4209C9.13848 13.1639 9.13848 12.7482 8.88144 12.4912L3.2869 7.00059L8.87598 1.50997C9.133 1.25293 9.133 0.837303 8.87598 0.580281L8.48769 0.191991C8.23067 -0.0650311 7.81504 -0.0650311 7.558 0.191991L1.11578 6.53574C0.864303 6.79278 0.864302 7.20841 1.1212 7.46543Z" fill="white" />
                </svg>
            </div>
        </>
    )
}
