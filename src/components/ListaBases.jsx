import React, { Component } from 'react'

class ListaBases extends Component{
    render(){
        return(
            <ul>
                { 
                    Array.of("BS-21","BS-22","BS-23","BS-24").map((base,index) => { 
                            return(
                                <li key = {index}>
                                    {base}
                                </li>
                            ) 
                        }
                    ) 
                }          
            </ul>
        )
    }
}
export default ListaBases