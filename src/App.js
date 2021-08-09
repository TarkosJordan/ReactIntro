import React, { Component } from 'react'
import ListaTiposComponentes from './components/ListaTiposComponentes/ListaTiposComponentes.jsx'
import FormularioCadastro from './components/FormularioCadastro.jsx'

class App extends Component {
  render(){
    return (
      <div>
        <FormularioCadastro/>
        <ListaTiposComponentes/>
      </div>
    )
  }
}
export default App
