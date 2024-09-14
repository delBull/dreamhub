
import Link from "next/link"
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, FreeMode, Navigation],
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
    spaceBetween: 40,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    freeMode: true,
}

export default function ProjectSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="swiper project-swiper">
                <div className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="project-box">
                            <div className="image">
                                <Link href="/nft">
                                    <img src="/assets/images/layouts/project-01.png" alt="" />
                                </Link>
                            </div>
                            <div className="content">
                                <Link href="/nft" className="h5 title">King Of Pirates</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-box">
                            <div className="image">
                                <Link href="/nft">
                                    <img src="/assets/images/layouts/project-02.png" alt="" />
                                </Link>
                            </div>
                            <div className="content">
                                <Link href="/nft" className="h5 title">3D Digital Artwork</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-box">
                            <div className="image">
                                <Link href="/nft">
                                    <img src="/assets/images/layouts/project-03.png" alt="" />
                                </Link>
                            </div>
                            <div className="content">
                                <Link href="/nft" className="h5 title">Pomeranian Doge</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-box">
                            <div className="image">
                                <Link href="/nft">
                                    <img src="/assets/images/layouts/project-04.png" alt="" />
                                </Link>
                            </div>
                            <div className="content">
                                <Link href="/nft" className="h5 title">Nintendo Switch</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-box">
                            <div className="image">
                                <Link href="/nft">
                                    <img src="/assets/images/layouts/project-05.png" alt="" />
                                </Link>
                            </div>
                            <div className="content">
                                <Link href="/nft" className="h5 title">The Strange Art</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-box">
                            <div className="image">
                                <Link href="/nft">
                                    <img src="/assets/images/layouts/project-03.png" alt="" />
                                </Link>
                            </div>
                            <div className="content">
                                <Link href="/nft" className="h5 title">3D Digital Artwork</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-box">
                            <div className="image">
                                <Link href="/nft">
                                    <img src="/assets/images/layouts/project-03.png" alt="" />
                                </Link>
                            </div>
                            <div className="content">
                                <Link href="/nft" className="h5 title">Pixel Art Addicted</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-box">
                            <div className="image">
                                <Link href="/nft">
                                    <img src="/assets/images/layouts/project-04.png" alt="" />
                                </Link>
                            </div>
                            <div className="content">
                                <Link href="/nft" className="h5 title">3D Digital Artwork</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-box">
                            <div className="image">
                                <Link href="/nft">
                                    <img src="/assets/images/layouts/project-05.png" alt="" />
                                </Link>
                            </div>
                            <div className="content">
                                <Link href="/nft" className="h5 title">3D Digital Artwork</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
                <div className="swiper-pagination" />
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
            </Swiper>
        </>
    )
}
