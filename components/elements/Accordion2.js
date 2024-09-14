
import { useState } from 'react'
export default function Accordion2({oneCol}) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <div className="faq__main flat-tabs" data-aos="fade-up" data-aos-duration={3000}>
               
                <div className="content-tab">
                    <div className="content-inner"style={{ display: `${activeIndex == 1 ? "block" : "none"}` }}>
                        <div className="flat-accordion row">
                            <div className={`col-md-6 ${oneCol?"col-md-12":"col-sm-12"} `}>
                                <div className={isActive.key == 1 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(1)}>
                                    <h6 className={isActive.key == 1 ? "toggle-title active" : "toggle-title"}><span></span> Entendemos tu Negocio<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <p>
                                            En Dreamhub, no solo ofrecemos soluciones tecnológicas. 
                                            Más que vender, creamos una experiencia personalizada para tokenizar tus activos, 
                                            adaptándonos a tus necesidades y llevando una orientación estratégica para maximizar 
                                            los beneficios de la tokenización y mejorar la posición de tu negocio en el mercado.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 2 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(2)}>
                                    <h6 className={isActive.key == 2 ? "toggle-title active" : "toggle-title"}><span></span> Marketplace Propio<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <p>
                                            Tu solo disfruta de la tokenización. Contamos con NFT marketplace propio para una 
                                            comercialización sin complicaciones ni retrasos innecesarios. Simplificamos el proceso 
                                            para que puedas aprovechar al máximo la revolución digital de manera rápida y efectiva.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 3 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(3)}>
                                    <h6 className={isActive.key == 3 ? "toggle-title active" : "toggle-title"}><span></span> Diseño y Arte<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <p>
                                        Colaboramos con artistas para crear NFTs únicos y atractivos, desde la creación de NFTs 
                                        hasta la interfaz de usuario, nuestro equipo de diseño trabaja para dar vida a tus ideas 
                                        de manera visualmente impactante.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 4 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(4)}>
                                    <h6 className={isActive.key == 4 ? "toggle-title active" : "toggle-title"}><span></span> Marketing<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <p>
                                        Desarrollamos estrategias de marketing personalizadas para promocionar tus activos tokenizados, 
                                        conectando con la audiencia adecuada. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-inner"style={{ display: `${activeIndex == 2 ? "block" : "none"}` }}>
                        <div className="flat-accordion row">
                            <div className={`col-md-6 ${oneCol?"col-md-12":"col-sm-12"} `}>
                                <div className={isActive.key == 9 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(9)}>
                                    <h6 className={isActive.key == 9 ? "toggle-title active" : "toggle-title"}><span>01.</span> ¿Qué tipo de activos se puede tokenizar? <span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}>
                                        <p>
                                        Casi cualquier tipo de activo, como bienes raíces, propiedades intelectuales, obras de arte y más, puede ser tokenizado.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 10 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(10)}>
                                    <h6 className={isActive.key == 10 ? "toggle-title active" : "toggle-title"}><span>02.</span> ¿Como se garantiza la seguridad?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 10 ? "block" : "none"}` }}>
                                        <p>
                                        Los activos tokenizados están respaldados por tecnología blockchain, que es altamente segura y transparente. 
                                        Además, Dreamhub aplica protocolos de seguridad estrictos
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 11 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(11)}>
                                    <h6 className={isActive.key == 11 ? "toggle-title active" : "toggle-title"}><span>03.</span> ¿Puedo vender activos tokenizados en otros lados?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 11 ? "block" : "none"}` }}>
                                        <p>
                                        Sí, muchos activos tokenizados se pueden vender en mercados secundarios, 
                                        proporcionando liquidez adicional a los inversores.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 12 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(12)}>
                                    <h6 className={isActive.key == 12 ? "toggle-title active" : "toggle-title"}><span>04.</span> ¿Cuáles son los costos asociados ton la tokenización?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 12 ? "block" : "none"}` }}>
                                        <p>
                                        Los costos pueden variar según el tipo y el alcance de la tokenización. 
                                        Dreamhub ofrece información detallada sobre los costos para cada proyecto.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-md-6 ${oneCol?"col-md-12":"col-sm-12"} `}>
                                <div className={isActive.key == 13 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(13)}>
                                    <h6 className={isActive.key == 13 ? "toggle-title active" : "toggle-title"}><span>05.</span> ¿Qué diferencia a Dreamhub de otras agencias? <span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 13 ? "block" : "none"}` }}>
                                        <p>
                                        Dreamhub se destaca por su experiencia, enfoque personalizado y una amplia gama de servicios de tokenización para satisfacer las necesidades específicas de cada cliente.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 14 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(14)}>
                                    <h6 className={isActive.key == 14 ? "toggle-title active" : "toggle-title"}><span>06.</span> Proceso de Tokenización<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 14 ? "block" : "none"}` }}>
                                        <p>
                                        El proceso de tokenización con Dreamhub implica la evaluación, la preparación de activos, 
                                        la creación de tokens y la gestión continua.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 15 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(15)}>
                                    <h6 className={isActive.key == 15 ? "toggle-title active" : "toggle-title"}><span>07.</span> ¿Cuánto tiempo lleva tokenizar un activo?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 15 ? "block" : "none"}` }}>
                                        <p>
                                        La duración varía según el activo y los requisitos, pero Dreamhub trabaja eficientemente 
                                        para completar la tokenización de manera oportuna.
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="content-inner"style={{ display: `${activeIndex == 3 ? "block" : "none"}` }}>
                        <div className="flat-accordion row">
                            <div className={`col-md-6 ${oneCol?"col-md-12":"col-sm-12"} `}>
                                <div className={isActive.key == 17 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(17)}>
                                    <h6 className={isActive.key == 17 ? "toggle-title active" : "toggle-title"}><span>01.</span> ¿Puedo invertir en activos a trávez de Dreamhub? <span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 17 ? "block" : "none"}` }}>
                                        <p>
                                        Sí, Dreamhub ofrece oportunidades de inversión en activos tokenizados.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 18 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(18)}>
                                    <h6 className={isActive.key == 18 ? "toggle-title active" : "toggle-title"}><span>02.</span> ¿Cuáles son las oportunidades? <span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 18 ? "block" : "none"}` }}>
                                        <p>
                                        Dreamhub ofrece una variedad de oportunidades de inversión en activos tokenizados, 
                                        como bienes raíces y propiedades intelectuales. La mejor opción para verificar las oportunidades
                                        es visitar el área de Launchpads, donde encontraás proyectos emergentes.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 19 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(19)}>
                                    <h6 className={isActive.key == 19 ? "toggle-title active" : "toggle-title"}><span>03.</span> ¿Cómo se distribuyen las ganancias?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 19 ? "block" : "none"}` }}>
                                        <p>
                                        Las ganancias se distribuyen según los términos del contrato de inversión. Pueden incluir
                                        desde dividendos o utilidades del proyecto hasta beneficios exclusivos y accesos preferenciales
                                        entre otros.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 20 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(20)}>
                                    <h6 className={isActive.key == 20 ? "toggle-title active" : "toggle-title"}><span>04.</span> ¿Cuále es la inversión mínima?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 20 ? "block" : "none"}` }}>
                                        <p>
                                        La inversión mínima puede variar según el proyecto, pero Dreamhub proporciona información específica
                                        en cada uno de los productos ofrecidos directamente en sus perfiles y launchpads.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-md-6 ${oneCol?"col-md-12":"col-sm-12"} `}>
                                <div className={isActive.key == 21 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(21)}>
                                    <h6 className={isActive.key == 21 ? "toggle-title active" : "toggle-title"}><span>05.</span> ¿Cómo puedo financiar la tokenización de mis activos? <span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 21 ? "block" : "none"}` }}>
                                        <p>
                                        Dreamhub ofrece opciones un "Launchpad" para el lanzmaiento de proyectos en el cual
                                        se podrá implementar preventas, lanzaminetos oficiales y ofertas de productos o servicios.
                                        </p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="content-inner"style={{ display: `${activeIndex == 4 ? "block" : "none"}` }}>
                        <div className="flat-accordion row">
                            <div className={`col-md-6 ${oneCol?"col-md-12":"col-sm-12"} `}>
                                <div className={isActive.key == 25 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(25)}>
                                    <h6 className={isActive.key == 25 ? "toggle-title active" : "toggle-title"}><span>01.</span> ¿Cómo se protegen mis datos? <span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 25 ? "block" : "none"}` }}>
                                        <p>
                                        Dreamhub aplica medidas de seguridad rigurosas para proteger los datos personales y financieros de sus clientes.
                                        Utilizando la tecnología Blockchain se garantiza la fiabilidad del uso por medio de la descentralización.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 26 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(26)}>
                                    <h6 className={isActive.key == 26 ? "toggle-title active" : "toggle-title"}><span>02.</span> ¿Qué medidas de seguridad se aplican?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 26 ? "block" : "none"}` }}>
                                        <p>
                                        Los activos tokenizados se respaldan en tecnología blockchain segura, lo que garantiza su integridad y propiedad.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 27 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(27)}>
                                    <h6 className={isActive.key == 27 ? "toggle-title active" : "toggle-title"}><span>03.</span> ¿Cómo se previene el fraude?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 27 ? "block" : "none"}` }}>
                                        <p>
                                        Dreamhub aplica protocolos de seguridad y verifica minuciosamente cada proyecto para prevenir el fraude.
                                        Además se cuenta con el área de verificados, en la cual otorgamos certificación de veracidad a los proyectos
                                        ya que pasan por diferentes filtros de seguridad y protección de datos.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 28 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(28)}>
                                    <h6 className={isActive.key == 28 ? "toggle-title active" : "toggle-title"}><span>04.</span> ¿Cuál es el nivel de soporte al cliente?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 28 ? "block" : "none"}` }}>
                                        <p>
                                        Dreamhub brinda un alto nivel de soporte al cliente, lo que incluye asesoramiento y asistencia 
                                        a lo largo de todo el proceso de tokenización.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-md-6 ${oneCol?"col-md-12":"col-sm-12"} `}>
                                <div className={isActive.key == 29 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(29)}>
                                    <h6 className={isActive.key == 29 ? "toggle-title active" : "toggle-title"}><span>05.</span> ¿Cómo puedo ponerme en contacto? <span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 29 ? "block" : "none"}` }}>
                                        <p>
                                        Los clientes pueden ponerse en contacto con el equipo de Dreamhub a través de la aplicación del Launchpad para proyectos.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 30 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(30)}>
                                    <h6 className={isActive.key == 30 ? "toggle-title active" : "toggle-title"}><span>06.</span> ¿Cuáles son los servicios personalizados?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 30 ? "block" : "none"}` }}>
                                        <p>
                                        Dreamhub ofrece servicios personalizados de tokenización que se adaptan a las necesidades específicas de cada cliente.
                                        Servicios de marketing, incubación, y tokenización son solo el inicio.
                                        </p>
                                    </div>
                                </div>
                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
