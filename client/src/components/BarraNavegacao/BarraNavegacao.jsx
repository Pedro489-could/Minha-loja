// Importando o css da barra de navegação
import styles from './BarraNavegacao.module.css'

//Importar os componentes do bootstrap
import {Nav,Navbar,NavDropdown,Image,Accordion} from "react-bootstrap"

import { NavLink } from 'react-router-dom'

// Importa o contexto
import { AuthContext } from "../../contexts/UserContext";
import { useContext } from "react";


//Importando os icones
import{BsBoxes} from "react-icons/bs"


const BarraNavegacao = () => {

  // importar o nome de usuario logado e funcao logout

  const {usuarioNome,logout} = useContext(AuthContext)

  //Guarda o id do úsuario atual
  const imagemAtual =localStorage.getItem("imagemPerfil")

  //Imagem padrão
  const semImagem = "https://st4.depositphotos.com/1000507/23078/v/450/depositphotos_230781112-stock-illustration-unidentified-user-icon-simple-vector.jpg"
  return (
    <div className="d-flex-column flex-shrink-0 p-3 text-white bg-dark min-vh-100 max-vh-100"
    style={{width : "250px"}}>
      {/* Logo de empresa */}
      <Navbar.Brand as = {NavLink} to = "/home"className="text-white mb-3">
        <BsBoxes className="fs-4"/>
        <span className="fs-5 ms-2">LTV Sempre pelo país</span>
      </Navbar.Brand>

      {/* Opções de menu */}
      <Nav className="flex-column mb-auto">

        {/* Opção de home */}
        <Nav.Link  as = {NavLink} to = "/home"
        className="text-white px-2">
          <BsBoxes className="fs-4"/>
          <span className="fs-5 ms-2">Home</span>
        </Nav.Link>

        {/* Opção de Relatórios */}
        <Nav.Link  as = {NavLink} to = "/relatorios"
        className="text-white px-2">
          <BsBoxes className="fs-4"/>
          <span className="fs-5 ms-2">relatório</span>
        </Nav.Link>

        {/* Criando o arcodeon */}
        <Accordion flush ="flex-column mb-auto">

          {/*Páginas produtos*/}
          <Accordion.Item className= "bg-dark text-white">
                   <Accordion.Header className= {styles.accordionHeader}>
                     <BsBoxes className="ms-4"/>
                      <span className= "ms-2">Produtos</span>
                      </Accordion.Header>
                       <Accordion.Body>
                      <Nav className="flex-column">
                        {/* Opção 1 */}
                        <Nav.Link as={NavLink} to = "/produtos/" className= "text-white ps-4">
                        <BsBoxes className="fs-5"/>
                        <span className="ms-2">Listar</span>
                        </Nav.Link>
                        {/* Opção 2 */}
                          <Nav.Link as={NavLink} to = "/produtos/cadastrar" className= "text-white ps-4">
                        <BsBoxes className="fs-5"/>
                        <span className="ms-2">Adicionar</span>
                        </Nav.Link>
                      </Nav>
                       </Accordion.Body>
                    <Accordion.Body>

                    </Accordion.Body>
                
          </Accordion.Item>
          {/* Fim dos produtos*/}
        </Accordion>
      </Nav>
    
    
    
    Aquele salva uma vida , salva o mundo inteiro
    
    </div>
  )

}

export default BarraNavegacao
