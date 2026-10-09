import '../../styles/localizacao.css';
import persona from '../../assets/img/persona-localizacao.svg';


function Localizacao() {
    return (
        <section id="local-contato" className="section-localizacao">

            <div className="localizacao-content">

                <h2>Nossa localização</h2>

                <p>R. Pedro Klein do Nascimento, 05</p>
                <p>São Paulo - SP</p>
                <p>Horário de funcionamento: Segunda a Sexta das 08h às 17h</p>

                <div className="mapa">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.4272543356833!2d-46.7300557303159!3d-23.828944171880284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce49954c815027%3A0xfacee6a1bb4a8758!2sR.%20Pedro%20Klein%20do%20Nascimento%2C%205%20-%20Parelheiros!5e0!3m2!1spt-BR!2sbr!4v1783084411342!5m2!1spt-BR!2sbr"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Localização da Renoforma"
                    />
                </div>

            </div>

             <div class="contact-container">

        <h2>Fale conosco</h2>

        <form class="contact-form">

            <input
                type="text"
                placeholder="Nome"
                name="nome"
            />

            <input
                type="tel"
                placeholder="Telefone"
                name="telefone"
            />

            <input
                type="email"
                placeholder="E-mail"
                name="email"
            />

            <textarea
                placeholder="Mensagem"
                name="mensagem"
            ></textarea>

            <div class="upload-image">
                <label for="imagem">
                    <span class="upload-icon">▣</span>
                    Enviar imagem
                </label>

                <input
                    type="file"
                    id="imagem"
                    accept="image/*"
                />
            </div>

            <button type="submit">
                Enviar
            </button>

        </form>

    </div>

        </section>
    );
}

export default Localizacao;