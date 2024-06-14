import { useEffect, useState } from 'react'
import './Login.css'
import imagem_login from '../../../img/imagem_login.png'
import { jwtDecode } from "jwt-decode";

function Login() {

    useEffect(() => {
        document.title = "Login"
    }, [])

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erroDados, setErroDados] = useState('')

    async function efetuarLogin(event) {
        event.preventDefault(); // Prevenir o comportamento padrão do formulário

        try {
            const resposta = await fetch(process.env.REACT_APP_URL_API + "/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, senha })
            });
            if (!resposta.ok) {
                setErroDados("Usuário ou senha inválidos");
                throw new Error("Erro na requisição" + resposta.status);
            } else {
                window.alert("Logado com sucesso!");
                const token = await resposta.json();

                const decodedToken = jwtDecode(token);
                const { usuario_tipo } = decodedToken;

                if (usuario_tipo === 'EMP') {

                    window.location.href = '/empresas/principal';
                } else if (usuario_tipo === 'DNP') {

                    window.location.href = '/usuario/principal';
                }
                else {
                    window.location.href = '/administrador/painel';
                }

                localStorage.setItem("decodedToken", JSON.stringify(decodedToken));
                localStorage.setItem("token", JSON.stringify(token));
            }
        } catch (error) {
            console.error("Erro ao fazer login", error);
        }
    }

    return (

        <div className="loginContainer container">

            <div className="row justify-content-center border shadow-sm mb-5 bg-body-tertiary rounded rounded-4 col-12 col-md-8 position-absolute top-50 start-50 translate-middle ">

                <div className="col-md-6 d-flex-md-5 p-5">

                    <p className="login_titulo fs-1 fw-bold text-center mt-5 mb-2 mb-md-5">Login</p>

                    <div className="form-floating mb-3">
                        <input type="email"
                            value={email}
                            onChange={(e => setEmail(e.target.value))}
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com" />
                        <label for="floatingInput">Email</label>
                        {erroDados && <div className="text-danger">{erroDados}</div>}
                    </div>

                    <div className="form-floating mt-md-3">
                        <input type="password"
                            value={senha}
                            onChange={(e => setSenha(e.target.value))}
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password" />
                        <label for="floatingPassword">Senha</label>
                        {erroDados && <div className="text-danger">{erroDados}</div>}
                    </div>

                    <a className="esqueceu_a_senha_login mt-3 mb-3 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover d-flex" href="/senha/recuperacao">
                        Esqueceu a senha?
                    </a>

                    <button
                        onClick={efetuarLogin}
                        className="btn_login btn w-100 ">Acessar</button>

                    <p className="text-body-dark text-center mt-4">
                        Não possui uma conta? <a href="/cadastro/confirmacao" className="esqueceu_a_senha_login link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Registre-se</a>
                    </p>
                </div>

                <div className="img_login col-md-6 d-flex mt-3 mt-md-0 rounded-4">
                    <img src={imagem_login} className="img-fluid"></img>
                </div>
            </div>
        </div>
    )
}

export default Login