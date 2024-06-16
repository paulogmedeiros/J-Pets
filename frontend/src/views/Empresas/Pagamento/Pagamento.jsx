import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import logoJPets from './img/logoJPets.png'
import './Pagamento.css'
import { notifications } from '@mantine/notifications'
import { Loader } from '@mantine/core';

const PaymentForm = () => {

  const [idEmpresa, setIdEmpresa] = useState(JSON.parse(localStorage.getItem("decodedToken"))?.idEmpresa);

  const errorIcon = <i className="fa-solid fa-circle-exclamation" style={{ color: "red", fontSize: "20px" }}></i>
  const sucessIcon = <i className="fa-solid fa-circle-check" style={{ color: "green", fontSize: "20px" }}></i>

  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  async function cadastrarCartao(event) {
    event.preventDefault();

    const cartaoDados = {
      cvv: state.cvc,
      numeroCartao: state.number,
      nomeCompleto: state.name,
      dataVencimento: state.expiry
    };

    console.log(cartaoDados);
    try {
      const result = await fetch(process.env.REACT_APP_URL_API + "/cartoes/" + idEmpresa, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json' // Especificando o corpo como JSON
        },
        body: JSON.stringify(cartaoDados)
      });
      const resposta = await result.json();
      console.log(resposta.status, result.status);

      if (result.status >= 400) { // Verifica se o status é 201 Created
        throw new Error(resposta.message);
      }

      notifications.show({ message: resposta.message, color: "white", icon: sucessIcon });
      setTimeout(() => {

      }, 1500);

    } catch (error) {
      console.log(error);
      notifications.show({ message: error.message, color: "white", icon: errorIcon });
    }
  }

  return (
    <div>
      <nav className="navbarEmpresas navbar navbar-expand-lg">
        <div className="container-fluid">

          {/* Logo do projeto */}
          <a className="navbar-brand" href="#">
            <img src={logoJPets} width={45} height={45} alt="Logo JPets" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Itens da barra de navegação */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav nav-underline">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/empresas/principal">Início</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Produtos
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/empresas/visualizarProdutos">Visualizar produtos</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/empresas/adicionarProdutos">Adicionar produtos</a></li>
                  <li><a className="dropdown-item" href="/empresas/removerProdutos">Remover produtos</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/empresas/adicionarMarcas">Adicionar marcas</a></li>
                  <li><a className="dropdown-item" href="/empresas/removerMarcas">Remover marcas</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/empresas/adicionarModelos">Adicionar modelos</a></li>
                  <li><a className="dropdown-item" href="/empresas/removerModelos">Remover modelos</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Serviços
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/empresas/visualizarServicos">Visualizar serviços</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/empresas/adicionarServicos">Adicionar serviços</a></li>
                  <li><a className="dropdown-item" href="/empresas/removerServicos">Remover serviços</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/empresas/cupons">Cupons</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Avaliações</a>
              </li>
            </ul>
          </div>
          <div className="dropdown me-5">
            <button className="btnPerfilEmpresa btn btn-secondary rounded-5 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Nome
            </button>
            <ul className="dropdown-menu">
              <a className="nav-link disabled ms-3" aria-disabled="true">Nome</a>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Meu perfil</a></li>
              <li><a className="dropdown-item text-warning" href="/">Sair</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Card do cartao de credito */}

      <div className="text-center mt-5">
        <div className="row justify-content-center">

          <div className="container col-md-4 pb-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded border rounded-5">

            <Cards
              number={state.number}
              expiry={state.expiry}
              cvc={state.cvc}
              name={state.name}
              focused={state.focus}
            />
            <div className="mt-3">
              <form onSubmit={cadastrarCartao}>
                <div className="mb-3">
                  <input
                    className='form-control'
                    type="tel"
                    name="number"
                    placeholder="Número do cartão"
                    value={state.number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    className='form-control'
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={state.name}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-6 mb-3">
                    <input
                      className='form-control'
                      type="tel"
                      name="expiry"
                      placeholder="Validade"
                      pattern='\d\d/\d\d'
                      value={state.expiry}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      required
                    />
                  </div>
                  <div className="col-6 mb-3">
                    <input
                      className='form-control'
                      type="tel"
                      name="cvc"
                      placeholder="CVC"
                      pattern='\d{3,4}'
                      value={state.cvc}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      required
                    />
                  </div>
                </div>
                <div className='d-grid'>
                  <button type="submit" className="btnCartaoCredito btn">Enviar</button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-7 col-12">
            <h3 className='fw-semibold mt-4 mt-md-0'>Resumo da compra</h3>
            <div className="container col-6 text-center shadow-sm mb-5 bg-body-tertiary rounded border rounded-3 p-4">
              <div className="row">
                <div className="col">
                  <h3>Total:</h3>
                </div>
                <div className="col">
                  <h3>R$200</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
