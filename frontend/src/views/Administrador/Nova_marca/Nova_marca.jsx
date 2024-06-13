import { useState, useEffect } from 'react'
import './Nova_marca.css'
import imgCadastroItens from '../img/imgCadastro.svg'
import logoJPets_adm from '../img/logoJPets.png'
import { notifications } from '@mantine/notifications'
import { Loader } from '@mantine/core';
import iconeVoltar from '../img/iconeVoltar.svg'

function Nova_marca() {

  const [animais, setAnimal] = useState([])
  const [produtos, setProdutos] = useState([])
  const [produto_id, setProduto_id] = useState([])
  const [nome, setNome] = useState('')
  const [animal_id, setAnimal_id] = useState('')
  const errorIcon = <i class="fa-solid fa-circle-exclamation" style={{ color: "red", fontSize: "20px" }}></i>
  const sucessIcon = <i class="fa-solid fa-circle-check" style={{ color: "green", fontSize: "20px" }}></i>

  useEffect(() => {
    document.title = "Cadastro | Marcas"
    pegarIdAnimais()
  }, [])

  // função para pegar o ID dos animais e colocar na lista suspensa
  async function pegarIdAnimais() {
    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/animais")

      const dados = await resposta.json()
      console.log(dados) // console log para teste
      setAnimal(dados)

    } catch (error) {
      window.alert("Erro ao carregar animais", error)
    }
  }

  async function pegarProdutosPorIdAnimal(animal_id) {
    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/produtos/animais/" + animal_id)

      const dados = await resposta.json()
      console.log(dados) // console log para teste
      console.log(dados)

      setProdutos(dados.map(value => {
        return { value: value.id.toString(), label: value.nome }
      }))

    } catch (error) {
      window.alert("Erro ao carregar produtos", error)
    }
  }


  return (
    <div className="admPainel">
      <nav className="admNavbar navbar navbar-expand-md">
        <div className="container-fluid d-flex">
          <a className="navbar-brand" href="/administrador/painel"><img src={logoJPets_adm} alt="" srcSet="" width={50} height={50} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end pe-5 me-5" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <div className="dropdown">
                  <button className="admInfo btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    P.G.
                  </button>
                  <ul className="dropdown-menu ">
                    <li><a className="dropdown-item disabled" href="#">Paulo Gabriel</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Meu perfil</a></li>
                    <li><a className="dropdown-item" href="#">Sair</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">

        {/* container para formulario e imagem */}
        <div className="row justify-content-center col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle ">

          {/* container para formulario */}
          <div className="col-md-5 d-flex-md-5 mt-5 mt-md-0">

            {/* Título */}
            <p className="tituloNovaMarca fs-1 fw-semibold text-center mb-0 mb-md-4">Nova marca</p>

            {/* lista suspensa para selecionar o animal */}
            <div className="form-floating mb-3 mb-md-3">
              <select
                value={animal_id}
                onChange={e => {
                  setAnimal_id(e.target.value);
                  pegarProdutosPorIdAnimal(e.target.value)
                }}

                className="form-select "
                id="floatingSelect"
                aria-label="Floating label select example">

                <option value="">Selecione</option>
                {animais.map(animal => (
                  <option
                    key={animal.id}
                    value={animal.id}>{animal.nome}</option>
                ))}

              </select>
              <label for="floatingSelect">Animal</label>
            </div>

            {/* lista suspensa para selecionar o produto */}
            <div className="form-floating mb-3 mb-md-3">
              <select
                value={produto_id}
                onChange={(e) => setProdutos(e)}
                data={produtos}
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example">

                <option value="">Selecione</option>
                {produtos.map(produto => (
                  <option
                    key={produto.id}
                    value={produto.id}>{produto.nome}</option>
                ))}

              </select>
              <label for="floatingSelect">Produto</label>
            </div>

            {/* Input para inserir o nome da marca */}
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="" />
              <label for="floatingInput">Nome da marca</label>
            </div>


            <a className="btnNovaMarca btn w-100" href="#" role="button">Cadastrar marca</a>

          </div>

          <div className="imgNovaMarca col-md-5 d-flex mt-3 mt-md-0 rounded-4">
            <img src={imgCadastroItens} className="img-fluid"></img>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Nova_marca