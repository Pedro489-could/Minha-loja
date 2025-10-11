// Importação dos componentes do bootstrap 
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Alert from "react-bootstrap/Alert"

// Importação do icone de login
import { BsBoxArrowInRight } from "react-icons/bs";

const Login = () => {
  return (
    <div>
      <Container className="justify-content-center align-content-center min-vh-100">
      {/* Linha para campos de login e icone */}
      <Row className="bg-info">
        {/* Coluna com o ícone da página */}
        <Col>
          {/* ícone de login */}
          <BsBoxArrowInRight style={{fontSize:"500px", color:"white"}}/>
        </Col>
        {/* Coluna com os campos de login */}
        <Col className="d-flex flex-column">
          <Form
          style={{ width: "75%", margin:"auto", textAlign: "center"}}>
            {/* Caixinha de email */}
              <FloatingLabel
                controlId="inputEmail"
                label="Email"
                className="mb-5"
              >
                <Form.Control 
                 type="email"
                />
              </FloatingLabel>
            {/* Fim de caixinha de email */}
            {/* Caixinha de senha */}
            <FloatingLabel
             controlId="inputSenha"
             label="Senha"
             className="mb-5">
              <Form.Control 
                type="password"
              />
            </FloatingLabel>
            {/* Fim de caixinha de senha */}

            {/* Botão pra envio */}
            <Button variant="primary" type="submit" className="mb-5" size="lg">
              Login
            </Button>

            {/* Alerta, caso haja algum erro */}
            <Alert variant="danger" className="my-3 w-75 mx-auto">
              Usuário ou senha inválidos
            </Alert>
          </Form>
        </Col>
      </Row>

      </Container>

    </div>
  )
}

export default Login