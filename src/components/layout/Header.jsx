import logo from '../../../src/assets/img/logo-principal.svg'
import coração from '../../../src/assets/img/Coração-header.svg'
import lupa from '../../../src/assets/img/Lupa-pesquisa.svg'
import { ChevronDown } from "lucide-react";
import { useState } from 'react';
import '../../styles/header.css'

function Header() {


    const [abrirProdutos, setAbrirProdutos] = useState(false);

    return (
        <header className="header">

            <div className="header-content">
                <div className="logo">
                    <img src={logo} alt="logo da empresa Renoforma" />
                </div>

                <div className="container-menu">
                    <nav className="menu">
                        <a href="#hero">Home</a>
                        <a href="#sobre-nos">Sobre Nós</a>
                        <a href="#nossos-servicos">Nossos Serviços</a>

                        <div className="menu-produtos-seta">

                            <a href="#produtos">
                                Nossos Produtos
                            </a>

                            <button className="dropdown-btn"
                                onClick={() => setAbrirProdutos(!abrirProdutos)}
                            >
                                <ChevronDown size={18} />
                            </button>

                            {
                                abrirProdutos && (
                                    <div className='dropdown-produtos'>

                                        <div className="categorias">
                                            <a href="#">Vison Gamer</a>
                                            <a href="#">Presidente Brizza</a>
                                            <a href="#">Secretaria Sky - Addit</a>
                                            <a href="#">Diretor Pollux</a>
                                            <a href="#">Loganrinas - Modelos</a>
                                            <a href="#">Sófas Recepção</a>
                                            <a href="#">Mesas Estação de Trabalho</a>
                                            <a href="#">Macas e Mochos</a>
                                            <a href="#">Armários - Modelos</a>

                                        </div>
                                    </div>
                                )
                            }

                        </div>

                        <a href="#">Contatos</a>
                    </nav>

                    <div className="search">
                        <input
                            type="text"
                            placeholder="O que está procurando ?"
                        />

                        <button className="search-btn">
                            <img src={lupa} alt="ícone Lupa de pesquisa" />
                        </button>


                    </div>

                    <div className="favorites">
                        <button>
                            <img src={coração} alt="ícone de coração" />
                        </button>
                    </div>

                </div>


            </div>
        </header >
    )
}

export default Header