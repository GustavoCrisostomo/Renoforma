import '../styles/loginAdmin.css'
import CadeiraAdmin from '../assets/img/CadeiraAdm.png'
import logo from '../assets/img/logo-segundario.svg'

import Header from "../components/layout/Header";

 
  function LoginAdmin() {

  return (
    <>
    <Header/>
   
    <div className="login-page">
          <svg
        className="login-wave"
        viewBox="0 0 1067 693"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M390 0 H905 C1020 120 1070 250 1057 380 C1045 520 990 620 930 693 H370 C440 600 520 480 505 340 C490 200 420 100 390 0 Z"
          fill="#76b01f"
        />
      </svg>

        <img className="login-logo" src={logo} alt="Logo" />

      <section className="login-welcome">

        <h1>Olá, Admin!</h1>
        <p>
          Faça login para acessar seu painel e gerenciar sua página de forma
          simples e segura.
        </p>

        <img  className="login-chair" src={CadeiraAdmin} alt="Cadeira de escritório" />
      
      </section>
 
      <form className="login-card">
        <label className="field-label" htmlFor="usuario">E-mail ou Usuário</label>
        <input
          type="text"
          id="usuario"
         
        />
 
        <label className="field-label" htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          
        />
 
        <div className="login-options">
          <label className="login-remember">
            <input
              type="checkbox"
             
            />
            Lembrar de mim
          </label>
          <a className="login-forgot" href="#">Esqueceu a senha ?</a>
        </div>
 
        <button className="btn-enter" type="submit">Entrar</button>
 
        <p className="login-or">OU</p>
 
        <div className="login-social">
          <button className="btn-social" type="button" aria-label="Entrar com Google">
            
          </button>
          <button className="btn-social" type="button" aria-label="Entrar com Facebook">
       
          </button>
        </div>
 
        <p className="login-no-account">Ainda não tem conta ?</p>
        <a className="btn-signup" href="#">Cadastre-se</a>
      </form>
    </div>

     </>
  )
};

export default LoginAdmin;