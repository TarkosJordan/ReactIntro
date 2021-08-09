import React, { Component } from 'react'
import ListaChicotes from '../ListaChicotes'
import ListaBases from '../ListaBases'
import ListaFixtures from '../ListaFixtures'
import ListaGravadores from '../ListaGravadores'
import "./style.css"

class ListaTiposComponentes extends Component{
    render(){
        return (
            <section className = "botao-tipo-comp">
                <ul>/
                    <li>
                        <h3 className>Chicotes</h3>
                        <ListaChicotes/>
                    </li>
                    <li>
                        <h3>Bases</h3>
                        <ListaBases/>
                    </li>
                    <li>
                        <h3>Fixture</h3>
                        <ListaFixtures/>
                    </li>
                    <li>
                        <h3>Gravadores</h3>
                        <ListaGravadores/>
                    </li>
                </ul>
            </section>
        )
    }
}
export default ListaTiposComponentes