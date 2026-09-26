import '../../styles/sobreNos.css'
import imageFachada from '../../../src/assets/img/imgFachada.svg'
import iconeTradicao from '../../../src/assets/img/ícone-tradicao.svg'
import iconeConfianca from '../../../src/assets/img/ícone-confiança.svg'
import iconeQualidade from '../../../src/assets/img/ícone-qualidade.svg'


function SobreNos() {

    return (

        <section id="sobre-nos" className="section-sobre-nos">

            <div className="img-fachada">
                <img src={imageFachada} alt="Fachada da empresa" />
            </div>

            <div className="sobre-nos-content">
                <h2>Sobre Nós</h2>
                <p>
                    A Renoforma é especializada na reforma e manutenção de cadeiras e poltronas para escritório, atendendo todas as marcas e oferecendo soluções completas para empresas e profissionais.
                    Fundada em 1987, a empresa acumula 38 anos de experiência no mercado, unindo tradição, conhecimento técnico e compromisso com a qualidade. Além dos serviços de reforma, a Renoforma também fornece produtos novos, sempre com garantia de fábrica e assistência técnica permanente, garantindo segurança e durabilidade.
                </p>


                <div className="qualidades">
                    <div className="icones-qualidades">
                        <img src={iconeTradicao} alt="ícone de pilares que remete a tradição" />
                        <p>Tradição</p>
                    </div>
                    <div className="icones-qualidades">
                        <img src={iconeConfianca} alt="ícone de um aperto de mãos" />
                        <p>Confiança</p>
                    </div>
                    <div className="icones-qualidades">
                        <img src={iconeQualidade} alt="ícone de um troféu" />
                        <p>Qualidade</p>
                    </div>

                </div>
            </div>

        </section >

    )

}

export default SobreNos;