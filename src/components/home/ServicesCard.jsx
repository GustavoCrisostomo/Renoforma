import '../../styles/servicesCard.css'


function ServicesCard({image, title, description}) {



    return(

        <article className="services-card">

            <div className="service-card-img">
               <img src={image} alt="Imagem de três cadeiras um do lado da outra" />
            </div>

            <div className="service-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>




            </article >

            )
}

export default ServicesCard;