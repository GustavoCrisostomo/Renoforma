import '../../styles/hero.css'
import bannerHero from '../../../src/assets/img/heroteste.svg'
import logo2 from '../../../src/assets/img/logo-segundario.svg'

function Hero() {
  return (
    <section id="hero" className="hero">



      <div className="hero-image">
        <img
          src={bannerHero} alt="Cadeira Renoforma"
        />
      </div>

      <div className="hero-content">

        <div className="hero-container">

          <h1 className="hero-years">
            38 anos
          </h1>

          <h2>
            Revitalizando cadeiras e ambientes de trabalho.
          </h2>

          <p>
            Reforma, manutenção e venda de cadeiras e acessórios para escritório com qualidade e tradição.
          </p>


          <div className="contaner-bnt-logo">
            <div className="hero-buttons">

              <a href="#local-contato" className="btn-primary">
                Solicitar Orçamento
              </a>

              <a href="#produtos" className="btn-secondary">
                Nosso Catálogo
              </a>

              {/* <button className="btn-secondary">
                Nosso Catálogo
              </button> */}


            </div>

            <div className="img-logo">
              <img src={logo2} alt="Logo da empresa Renoforma" />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero