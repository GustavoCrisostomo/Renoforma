import Header from '../components/layout/Header';
import '../styles/login.css';
 
function Login() {
 
    return (
        <>
            {/* Header já existente no projeto */}
            <Header />
 
            <main className="main-content">
 
                {/* Título */}
                <div className="login-intro">
 
                    <h1>
                        Acesse sua conta!
                    </h1>
 
                    <p>
                        Entre e aproveite o melhor da Renoforma.
                    </p>
 
                </div>
 
 
                {/* Card de Login */}
                <div className="login-card" aria-label="Login">
 
                    <form className="login-form">
 
                        {/* E-mail / Usuário */}
                        <div className="form-group">
 
                            <label htmlFor="user">
                                E-mail ou Usuário
                            </label>
 
                            <input
                                type="text"
                                id="user"
                                name="user"
                                autoComplete="username"
                                required
                            />
 
                        </div>
 
 
                        {/* Senha */}
                        <div className="form-group">
 
                            <label htmlFor="password">
                                Senha
                            </label>
 
                            <div className="password-wrapper">
 
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    autoComplete="current-password"
                                    required
                                />
 
                            </div>
 
                        </div>
 
 
                        {/* Opções */}
                        <div className="login-options">
 
                            <label className="remember">
 
                                <input
                                    type="checkbox"
                                    name="remember"
                                />
 
                                <span>
                                    Lembrar de mim
                                </span>
 
                            </label>
 
 
                            <a
                                href="/EsqueceuSenha"
                                className="forgot-password"
                            >
                                Esqueceu a senha?
                            </a>
 
                        </div>
 
 
                        {/* Entrar */}
                        <button
                            type="submit"
                            className="login-button"
                        >
                            Entrar
                        </button>
 
                         {/* Login com Google*/}
                        <button
                            type="submit"
                            className="login-google"
                        >
                            Entrar com Google
                        </button>
 
 
                    </form>
 
 
                   
 
 
                    {/* Cadastro */}
                    <div className="register">
 
                        <p>
                            Ainda não tem conta?
                        </p>
 
                        <a href="#">
                            Cadastre-se
                        </a>
 
                    </div>
 
                </div>
 
            </main>
        </>
    );
}
 
export default Login;