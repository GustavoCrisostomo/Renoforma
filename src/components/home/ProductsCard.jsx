import '../../styles/productsCard.css'
import coracaoFavoritos from '../../assets/img/coracaoFavoritos.svg'
import coracaoFavoritosVerde from '../../assets/img/coracaoFavoritoVerde.svg'
import { useState } from 'react';

function ProductsCard({image, title, reference}) {

const [favorito, setFavorito] = useState(false);

    return (

        <article className="product-card">

            <button 
             type="button"
            className="favorite-btn"
            onClick={()=> setFavorito(!favorito)}
            >
                <img src={favorito? coracaoFavoritosVerde : coracaoFavoritos} />
            
            </button>

            <div className="product-image">
                <img src={image} alt={title}/>
            </div>

            <div className="product-content">

                <h3>{title}</h3>

                <span>{reference}</span>

                <button className='btn-veja-mais'
                
                >
                    Veja mais
                </button>

            </div>

        </article>

    )
}
export default ProductsCard;