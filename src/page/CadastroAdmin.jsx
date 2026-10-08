import Header from "../components/layout/Header";

import '../styles/cadastroAdmin.css'



 
  function CadastroAdmin() {
 
    
  return (
<>

<Header/>
   

    <div className="cadastro-page">
      <svg className="cadastro-wave" viewBox="0 0 768 499" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M230 0 H768 V360 C730 420 660 470 590 499 H0 V315 C80 270 170 200 210 110 C220 80 228 40 230 0 Z"
          fill="#76b01f"
        />
      </svg>
 
      <main className="cadastro-main">
        <h1 className="cadastro-title">Cadastro de Administrador</h1>
        <p className="cadastro-subtitle">
          Cadastre um novo administrador para gerenciar o sistema com segurança
          e praticidade.
        </p>
 
        <form className="cadastro-card">
          <label className="cadastro-label" htmlFor="nome">Nome Completo</label>
          <input className="cadastro-input" type="text" id="nome" />
 
          <label className="cadastro-label" htmlFor="usuario">Usuário</label>
          <input className="cadastro-input" type="text" id="usuario"  />
 
          <label className="cadastro-label" htmlFor="email">Email</label>
          <input className="cadastro-input" type="email" id="email"  />
 
          <label className="cadastro-label" htmlFor="telefone">Telefone</label>
          <input className="cadastro-input short" type="tel" id="telefone" />
 
          <label className="cadastro-label" htmlFor="senha">Senha</label>
          <input className="cadastro-input short" type="password" id="senha" />
 
          <label className="cadastro-label" htmlFor="confirmar">Confirmar senha</label>
          <input className="cadastro-input short" type="password" id="confirmar" />
 
          <button className="cadastro-btn" type="submit">Cadastrar</button>
        </form>
      </main>
    </div>

    </>
  )
};

export default CadastroAdmin;