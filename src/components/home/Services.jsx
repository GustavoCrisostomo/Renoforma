import '../../styles/services.css'
import ServicesCard from './ServicesCard';
import servicesNovas from "../../assets/img/servicesNova.svg";
import servicesReforma from "../../assets/img/servicesCadeiraReforma.svg";
import servicesEstofamento from "../../assets/img/servicesEstofamento.svg";
import servicesManutencao from "../../assets/img/servicesManutencao.svg";
import servicesCorporativo from "../../assets/img/servicesCorporativo.svg";
import servicesPoltronas from "../../assets/img/servicesPoltronas.svg";


function Services() {

    const services = [
        {
            image: servicesNovas,
            title: "Venda de cadeiras novas",
            description: "Cadeiras novas para diferentes ambientes de trabalho."
        },
        {
            image: servicesReforma,
            title: "Reforma de cadeiras",
            description: "Reforma completa com troca de peças, revitalização e acabamento profissional."
        },
        {
            image: servicesEstofamento,
            title: "Troca de estofamento",
            description: "Renovamos estofamento com conforto e variedade de tecidos."
        },
        {
            image: servicesManutencao,
            title: "Manutenção de cadeiras",
            description: "Serviços preventivos e corretivos para maior vida útil e desempenho."
        },
        {
            image: servicesCorporativo,
            title: "Móveis corporativos",
            description: "Desenvolvimento e manutenção de mesas e armários de escritório, além de arquivos e mobiliário corporativo."
        },
        {
            image: servicesPoltronas,
            title: "Sofás e poltronas",
            description: "Reforma e revitalização de sofás e poltronas para ambientes corporativos."
        }
    ];

    return (

        <section id="nossos-servicos" className="section-services">

            <h2 className='title-services'> Nossos Serviços </h2>

            <div className="services-container">
               
                
                    {services.map((service, index) => (
                       <ServicesCard

                                image={service.image}
                                title={service.title}
                                description={service.description}
                        />
                    ))}
             

            </div>

        </section >

    );
}

export default Services;