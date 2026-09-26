import '../../styles/footer.css'

import iconeWpp from '../../assets/img/ícone-wpp-footer.svg'
import iconeTelefone from '../../assets/img/ícone-telefone.svg'
import iconeEmail from '../../assets/img/ícone-email.svg'
import iconeRelogio from '../../assets/img/ícone-relogio.svg'
import iconeLocalizacao from '../../assets/img/ícone-localização.svg'
import imgFacebook from '../../assets/img/ícone-facebook.svg'
import imgInstagram from '../../assets/img/ícone-instagram.svg'
import imgLinkedin from '../../assets/img/ícone-linkedin.svg'
import imgimglogo from '../../assets/img/imgimglogo.svg'



function Footer() {
    return (
        <footer className="section-footer">

            <div className="footer-content">
                <div className="img-logo-footer">
                    <img src={imgimglogo} alt="imagem do logo da empresa renoforma" />
                    <p>CNPJ: 58.013.541/0001-34</p>
                </div>

                <div className="footer-renoforma">
                    <h3>Renoforma</h3>
                    <a href="">Home</a>
                    <a href="">Nossos Seviços</a>
                    <a href="">Nossos Produtos</a>
                    <a href="">Sobre Nós</a>
                    <a href="">Nossa Localização</a>
                </div>

                <div className="footer-atendimento">
                    <h3>Atendimento</h3>

                    <div className="footer-item">
                        <img src={iconeTelefone} alt="ícone de um telefone" />
                        <p>(11) 5920-8723</p>
                    </div>
                    <div className="footer-item">
                        <img src={iconeTelefone} alt="ícone de um telefone" />
                        <p>(11) 5920-8107</p>
                    </div>

                    <div className="footer-item">
                        <img src={iconeTelefone} alt="ícone do aplicativo do whatsapp" />
                        <p>(11) 99952-6448</p>

                    </div>

                    <div className="footer-item">
                        <img src={iconeEmail} alt="ícone de uma carta" />
                        <p>giroforma@giroforma.com.br</p>

                    </div>

                    <div className="footer-item">
                        <img src={iconeRelogio} alt="ícone de um relógio" />
                        <p>08h ás 17h:20</p>

                    </div>

                </div>


                <div className="footer-localizacao">


                    <h3>Localização</h3>

                    <div className="footer-item">
                        <img src={iconeLocalizacao} alt="ícone de uma seta de localização" />
                        <p>R. Pedro Klein do Nascimento, 05</p>
                    </div>


                    <div className="footer-item">
                        <img src={iconeLocalizacao} alt="ícone de uma seta de localização" />
                        <p>São Paulo - SP</p>
                    </div>

                    <div className="footer-siga-nos">
                        <h3>Siga-nos</h3>
                        <div className="footer-rede">

                            <a
                                href="https://www.facebook.com/profile.php?id=100064103852919"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <img src={imgFacebook} alt="" />
                            </a>


                            <a
                                href="https://www.instagram.com/renoforma/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <img src={imgInstagram} alt="" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/gustavo-cris%C3%B3stomo98/?skipRedirect=true"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >

                                <img src={imgLinkedin} alt="" />
                            </a>






                        </div>

                    </div>



                </div>


            </div>

            <div className="footer-copy">
                <p>© 2026 Renoforma. Todos os direitos reservados.</p>
                <p>Desenvolvido por <a href="https://www.linkedin.com/in/gustavo-cris%C3%B3stomo98/">Gustavo Crisóstomo.</a></p>
            </div>
        </footer>
    )
}

export default Footer