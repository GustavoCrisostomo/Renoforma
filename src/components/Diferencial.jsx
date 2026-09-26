import '../styles/diferencial.css'
import profile from '../assets/img/ícone-profile.svg'
import orçamento from '../assets/img/ícone-list.svg'
import garantia from '../assets/img/ícone-verificado.svg'
import assistencia from '../assets/img/ícone-tools.svg'
import caminhao from '../assets/img/ícone-truck.svg'
import anos from '../assets/img/ícone-tradição.svg'


function Diferencial() {
    return (

        <section className='diferenciais'>


            

                <div className="diferencial-item">
                     <img src={anos} alt="ícone de perfil de usuário" />
                    <p>Anos de Experiência</p>
                </div>

                <div className="diferencial-item">
                    <img src={profile} alt="ícone de perfil de usuário" />
                    <p>Atendimento especializado</p>
                </div>

                <div className="diferencial-item">
                    <img src={orçamento} alt="ícone de uma prancheta de orçamento" />
                    <p>Orçamente rápido</p>
                </div>

                <div className="diferencial-item">
                    <img src={garantia} alt="ícone de verificado" />
                    <p>Serviço com garantia</p>
                </div>

                <div className="diferencial-item">
                    <img src={assistencia} alt="ícone de ferramnetas" />
                    <p>Assistência técnica</p>
                </div>

                <div className="diferencial-item">
                    <img src={caminhao} alt="ícone de um caminhão" />
                    <p>Sistema leva e traz</p>
                </div>
            

        </section>

    )
}

export default Diferencial