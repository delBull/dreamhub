import Preloader from '../components/elements/Preloader'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from "react"
import 'swiper/css'
import 'swiper/css/free-mode'
import "swiper/css/navigation"
import "swiper/css/pagination"
import "../public/assets/css/animate.css"
import "public/assets/css/app.css"
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import { PrimeReactProvider } from 'primereact/api';

function MyApp({ Component, pageProps }) {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
        AOS.init()
    }, [])
    return (
        <div className="home-main header-fixed">
            {!loading ? (
                <PrimeReactProvider>
                <Component {...pageProps} />
                </PrimeReactProvider>
            ) : (
                <Preloader />
                
            )}
        </div>)
}

export default MyApp
