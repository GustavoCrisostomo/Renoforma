import '../styles/cadastro.css';
import Header from "../components/layout/Header";

function Cadastro() {
    return (
        <>

        <Header/>
            

            <main className="cadastro-pagina">

                <section className="cadastro-intro">
                    <h1>Vamos criar sua conta</h1>
                    <p>É rápido. Preencha os campos para começar.</p>
                </section>

                <section className="cadastro-card">

                    <div className="formulario">

                        {/* DADOS PESSOAIS */}
                        <div className="form-coluna">

                            <h2>Dados Pessoais</h2>

                            <div className="campo">
                                <label htmlFor="nome">Nome Completo</label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                />
                            </div>

                            <div className="campo">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                />
                            </div>

                            <div className="campo campo-menor">
                                <label htmlFor="celular">Celular</label>
                                <input
                                    type="tel"
                                    id="celular"
                                    name="celular"
                                />
                            </div>

                            <div className="campo campo-menor">
                                <label htmlFor="senha">Senha</label>
                                <input
                                    type="password"
                                    id="senha"
                                    name="senha"
                                />
                            </div>

                            <div className="campo campo-menor">
                                <label htmlFor="confirmarSenha">
                                    Confirmar Senha
                                </label>

                                <input
                                    type="password"
                                    id="confirmarSenha"
                                    name="confirmarSenha"
                                />
                            </div>

                        </div>


                        {/* ENDEREÇO */}
                        <div className="form-coluna">

                            <h2>Seu endereço</h2>

                            <div className="campo campo-cep">
                                <label htmlFor="cep">CEP</label>
                                <input
                                    type="text"
                                    id="cep"
                                    name="cep"
                                />
                            </div>

                            <div className="linha-endereco">

                                <div className="campo">
                                    <label htmlFor="rua">Rua</label>
                                    <input
                                        type="text"
                                        id="rua"
                                        name="rua"
                                    />
                                </div>

                                <div className="campo campo-numero">
                                    <label htmlFor="numero">Nº</label>
                                    <input
                                        type="text"
                                        id="numero"
                                        name="numero"
                                    />
                                </div>

                            </div>

                            <div className="campo">
                                <label htmlFor="bairro">Bairro</label>
                                <input
                                    type="text"
                                    id="bairro"
                                    name="bairro"
                                />
                            </div>

                            <div className="campo">
                                <label htmlFor="complemento">
                                    Complemento
                                </label>

                                <input
                                    type="text"
                                    id="complemento"
                                    name="complemento"
                                />
                            </div>

                        </div>

                    </div>

                    <button type="button" className="botao-cadastro">
                        Cadastre-se
                    </button>

                </section>

            </main>
        </>
    );
}

export default Cadastro;