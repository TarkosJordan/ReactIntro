import React, { Component } from 'react'

class ListaGravadores extends Component{
    render(){
        return(
            <ul>
            { 
                Array.of("GR-01","GR-02","GR-03","GR-04").map((gravador,index) => { 
                        return(
                            <li key = {index}>
                                {gravador}
                            </li>
                        ) 
                    }
                ) 
            }          
            </ul>
        )
    }
}
export default ListaGravadores