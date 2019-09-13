'use strict'
import React, { Component } from 'react'
import Title from './title'
import Square from './Square'

class App  extends Component{
    render(){
        return (
            <div onClick={ (e) =>{
                alert('clicou')
            }}>
                  <Square/>  
            </div>
        )
    }
}

App.defaultProps ={

}


export default App