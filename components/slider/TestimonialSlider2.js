import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 3,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },

}
export default function TestimonialSlider2() {
    return (
        <>
            <Swiper {...swiperOptions} className="swiper testimonials-swiper s2">
                <SwiperSlide>
                    <div className="box-testimonial center">
                        <div className="image">
                            <img src="/assets/images/layouts/Beksinski_company.png" alt="" />
                        </div>
                        <div className="info">
                            <h4 className="name">Emprendedores Visionarios</h4>
                            <p></p>
                            {/* <img src="/assets/images/icon/quote-2.png" alt="" /> */}       
                        </div>
                        <p className="text">Imagina que eres un emprendedor que busca expandir su empresa. Puedes tokenizar deuda, permitiendo que los inversores adquieran tokens respaldados por esa deuda. A cambio, obtienes la liquidez necesaria para impulsar nuevas inversiones y expandir tu negocio.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box-testimonial center">
                        <div className="image">
                            <img src="/assets/images/layouts/Beksinski_evolution.png" alt="" />
                        </div>
                        <div className="info">
                            <h4 className="name">Empresas en Crecimiento</h4>
                            <p></p>
                            {/* <img src="/assets/images/icon/quote-2.png" alt="" /> */} 
                        </div>
                        <p className="text">Si eres una empresa con activos valiosos, desde propiedades hasta maquinaria, la tokenización te permite convertir esos activos en tokens digitales. Al hacerlo, obtienes liquidez inmediata al tiempo que mantienes la propiedad y control de tus activos.
 </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box-testimonial center">
                        <div className="image">
                            <img src="/assets/images/layouts/Beksinski_creativity.png" alt="" />
                        </div>
                        <div className="info">
                            <h4 className="name">Artistas y Creadores</h4>
                            <p></p>
                            {/* <img src="/assets/images/icon/quote-2.png" alt="" /> */} 
                        </div>
                        <p className="text">Los artistas pueden llevar su trabajo al siguiente nivel mediante la tokenización. ¿Cómo? Tokeniza tus creaciones artísticas, ofreciendo a tus seguidores la oportunidad de poseer partes exclusivas de tu obra. También puedes tokenizar accesos a eventos, membresías y contenido exclusivo, generando ingresos y construyendo una comunidad leal.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
