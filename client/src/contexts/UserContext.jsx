//Importantdo o hook de criar o contesxto
import { createContext, useEffect, useState } from "react";

//Criando o contexto de autorizaçaõ
export const AuthContext = createContext ()

//Cria o provaide do conexto
//Provider = fornece as inforações para os componentrs filhos 
export const AutProvider =  ({children}) =>{
    //State para guarda paap
    const [usuarioNome,setUsuarioNome] = useState ("")
    //Quando o componente é redenrizado , busca no local o usuario atual, se não tiver nenhum definido como Visitante
    useEffect (() =>{
        const nomeAtual = localStorage.getItem ("userName") ||"Visitante"
        setUsuarioNome(nomeAtual)
    })
    
    //Funçaõ para receber as informações login , e guardar no localSorage
    const login = (data) => {
        console.log("Usuário logado",data)
        localStorage.setItem("id", data.id)
        localStorage.setItem("userName", data.nome)
        localStorage.setItem("imagemPerfil", data.imagemUrl)
        setUsuarioNome(data.nome)
    }
   // Função para remover as informações login do localSorage e redefinir o nome de usuário para Visitante
    const logout = () => {
        localStorage.clear()
        setUsuarioNome("Visitante")
    }
    //Retorna o provider com os dados do usuário , login e logout
    return(
        <AuthContext.Provider value = {{usuarioNome, login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}