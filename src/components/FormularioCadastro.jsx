import React, {Component} from 'react'

export class FormularioCadastro extends Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="Nome do Componente"/>
                <textarea placeholder="Descrição do componente"/>
                <button>Inserir Componente</button>
            </form>
        )
    }
}