import { Outlet, Navigate } from "react-router-dom"

const RotasProtegidas = () => {
  // Variável para saber se está logado ou não
  const estaLogado = true
  // Se não tiver, joga pra tela de login
  if(!estaLogado){
    return <Navigate to="/login"/>
  }

  return (
    <div className="App">
     {/* Barra de navegação fixa na lateral */}
     <div>
        <h1>Barra de navegação</h1>
     </div>
     {/* Conteúdo principal, dependendo de qual rota está */}
     <div>
        <h1>Conteúdo principal</h1>
      </div> 
    </div>
  )
}

export default RotasProtegidas