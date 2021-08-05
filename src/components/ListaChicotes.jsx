import React, { Component } from 'react'

class ListaChicotes extends Component{
    render(){
        return(
            <ul>
            { 
                Array.of("CNV-96","CNV-97","CNV-98","CNV-99").map((chicote,index) => { 
                        return(
                            <li key = {index}>
                                {chicote}
                            </li>
                        ) 
                    }
                ) 
            }          
            </ul>
        )
    }
}
export default ListaChicotes