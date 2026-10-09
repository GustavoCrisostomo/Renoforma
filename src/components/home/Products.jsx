import '../../styles/products.css'
import ProductsCard from './ProductsCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"

import cadeiraref11 from '../../assets/img/cadeiraref11.svg'
import cadeiraref10 from '../../assets/img/cadeiraref10.svg'
import cadeiraref09 from '../../assets/img/cadeiraref09.svg'
import cadeiraref08 from '../../assets/img/cadeiraref08.svg'
import longarinasref07 from '../../assets/img/longarinasref07.svg'
import armariosref05 from '../../assets/img/armariosref05.svg'
import sofasref06 from '../../assets/img/sofasref06.svg'
import mesasref04 from '../../assets/img/mesasref04.svg'
import mascasref03 from '../../assets/img/macasref03.svg'





function Products() {

    const products = [
        {
            image: cadeiraref11,
            title: "Vison Gamer",
            reference: "REF. 11"
        },
        {
            image: cadeiraref10,
            title: "Presidente Brizza ",
            reference: "REF. 10"
        },
        {
            image: cadeiraref09,
            title: "Diretor Pollux",
            reference: "REF. 09"
        },
        {
            image: cadeiraref08,
            title: "Secretaria Sky - Addit",
            reference: "REF. 08"
        },
        {
            image: longarinasref07,
            title: "Logarinas - Modelos",
            reference: "REF. 07"
        },
        {
            image: sofasref06,
            title: "Sófas Recepção",
            reference: "REF. 06"
        },
        {
            image: armariosref05,
            title: "Armários - Modelos",
            reference: "REF. 05"
        },
        {
            image: mesasref04,
            title: "Estação de trabalho",
            reference: "REF. 04"
        },
        {
            image: mascasref03,
            title: "Macas e mochos",
            reference: "REF. 03"
        }

    

    ];

    return (
        <section id="produtos" className="section-products">

            <h2>Nossos Produtos</h2>

<div className="products-carousel">
            <Swiper

                slidesPerView={4}
                
                grabCursor={true}>

                {products.map((product, index) => (

                    <SwiperSlide key={index}>
                        <ProductsCard
                            image={product.image}
                            title={product.title}
                            reference={product.reference}
                        />
                    </SwiperSlide>

                ))}

            </Swiper>
</div>
        </section>
    );
}

export default Products;