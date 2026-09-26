import '../../styles/services.css'
import ServicesCard from './ServicesCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import cadeiraNova from '../../assets/img/cadeiras-vendas.svg'
import cadeiraReforma from '../../assets/img/cadeira-reforma.svg'
import cadeiraEstofamento from '../../assets/img/troca-estofamento.svg'
import cadeiraManutencao from '../../assets/img/manutencao-cadeira.svg'
import moveisCorporativos from '../../assets/img/moveis-corporativos.svg'
import sofasPoltronas from '../../assets/img/sofas-poltronas.svg'
import iconeLupaErro from '../../assets/img/ícone-lupa-erro.svg'
import iconeWpp from '../../assets/img/ícone-wpp.svg'



function Services() {

    const services = [
        {
            image: cadeiraNova,
            title: "Venda de cadeiras novas",
            description: "Fornecimento de cadeiras novas com garantia de fábrica e qualidade comprovada."
        },
        {
            image: cadeiraReforma,
            title: "Reforma de cadeiras",
            description: "Reforma completa com troca de peças, revitalização e acabamento profissional."
        },
        {
            image: cadeiraEstofamento,
            title: "Troca de estofamento",
            description: "Renovamos estofamento com conforto e variedade de tecidos."
        },
        {
            image: cadeiraManutencao,
            title: "Manutenção de cadeiras",
            description: "Serviços preventivos e corretivos para maior vida útil e desempenho."
        },
        {
            image: moveisCorporativos,
            title: "Móveis corporativos",
            description: "Desenvolvimento e manutenção de mesas e armários de escritório, além de arquivos e mobiliário corporativo."
        },
        {
            image: sofasPoltronas,
            title: "Sofás e poltronas",
            description: "Reforma e revitalização de sofás e poltronas para ambientes corporativos."
        }
    ];

    return (

        <section id="nossos-servicos" className="section-services">
            <h2> Nossos Serviços </h2>

            <div className="services-carousel">
                <Swiper
                    slidesPerView={4.5}
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <ServicesCard

                                image={service.image}
                                title={service.title}
                                description={service.description}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>


            <div className="servico-nao-encontrado">

                <div className="img-lupa">
                    <img src={iconeLupaErro} alt="ícone de uma lupa com um X no meio" />
                </div>

                <div className="servico-nao-encontrado-content">
                    <h3>Não encontrou o serviço que procura?</h3>
                    <p>Entre em contato conosco e verifique a disponibilidade para sua necessidade.</p>

                    <a className="btn-fale-conosco"

                        href="https://wa.me/5511913112505?text=Olá,%20gostaria%20de%20solicitar%20um%20serviço."
                        target="_blank"
                        rel="noopener noreferrer">


                        Fale Conosco
                        <img src={iconeWpp} alt="ícone do Whatsapp" />
                    </a>
                </div>
            </div>

        </section >

    );
}

export default Services;