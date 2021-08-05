import React, { Component } from 'react'

class ListaFixtures extends Component{
    render(){
        return(
            <ul>
            { 
                Array.of("FX-08","FX-12","FX-10","FX-11").map((fixture,index) => { 
                        return(
                            <li key = {index}>
                                {fixture}
                            </li>
                        ) 
                    }
                ) 
            }          
            </ul>
        )
    }
}
export default ListaFixtures