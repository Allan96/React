'use strict'
import React, { Component } from 'react'
import Title from './title'
import Square from './Square'

class App  extends Component{
    render(){
        return (
            <div>
                {['blue', 'red', 'green'].map((square) => (
                  <Square key={square}  color={square} />  
                ))}
            </div>
        )
    }
}

App.defaultProps ={

}


export default App