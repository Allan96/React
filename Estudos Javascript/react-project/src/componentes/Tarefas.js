import React, { Component, Fragment } from "react";
export default class Tarefas extends Component {

    constructor(props){
        super(props);
        this.state = { 
            tarefa: "",
            tarefas: ["Tarefa 1", "Tarefa 2", "Tarefa 3", "Tarefa 4", "Tarefa 5", "Tarefa 6", "Tarefa 7", "Tarefa 8", "Tarefa 9"],
        };

        this.handleChange = this.handleChange.bind(this);
        this.adicionaTarefa = this.adicionaTarefa.bind(this);
       }

    render(){
    
        return (
            <Fragment>
        <h1>{ this.props.titulo }</h1>
        <input onChange={ this.handleChange } value={ this.state.tarefa }/>
        <button onClick={ this.adicionaTarefa }>Adicionar</button>
        <ul>
           {
               this.state.tarefas.map(tarefa => <li key={ tarefa }>{tarefa}</li>) //codigos javascript tem que estar dentro de chaves
           }
        </ul>
        </Fragment>
    );
    }
    adicionaTarefa(){
        const { tarefa, tarefas } = this.state;
        this.setState({ 
            tarefa: "",
            tarefas: [].concat(this.state.tarefas, this.state.tarefa)
        });
    }
    handleChange(event){
        this.setState({tarefa : event.target.value}
        );
    }
}