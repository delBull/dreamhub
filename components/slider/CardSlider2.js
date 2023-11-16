import Link from 'next/link'
import 'swiper/css/effect-coverflow'
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, EffectCoverflow, Navigation],
    loop: true,
    spaceBetween: -90,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },

    },
    centeredSlides: true,
    freeMode: true,
    watchSlidesProgress: true,
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 700,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next.s1",
        prevEl: ".swiper-button-prev.s1",
    },
    pagination: {
        el: ".swiper-pagination",
    },
}

export default function CardSlider2() {
    return (
        <>
             <Swiper {...swiperOptions}  className="swiper cardSwiper2">
                                            <div className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="card-box s2">
                                                        <div className="image">
                                                            <img src="/assets/images/layouts/item-06.png" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="info d-flex">
                                                                <img src="/assets/images/layouts/avt-06.png" alt="" />
                                                                <div>
                                                                    <h6 className="name">Hypnos Dream Pass</h6>
                                                                    <p>1 ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="card-box s2">
                                                        <div className="image">
                                                            <img src="/assets/images/layouts/item-07.png" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="info d-flex">
                                                                <img src="/assets/images/layouts/avt-07.png" alt="" />
                                                                <div>
                                                                    <h6 className="name">HAF Metaverse</h6>
                                                                    <p>150 MATIC</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="card-box s2">
                                                        <div className="image">
                                                            <img src="/assets/images/layouts/item-08.png" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="info d-flex">
                                                                <img src="/assets/images/layouts/avt-08.png" alt="" />
                                                                <div>
                                                                    <h6 className="name">AGOD: Jaguar Series</h6>
                                                                    <p>350 FTM</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </div>
                                        </Swiper>
        </>
    )
}
