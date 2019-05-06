import React, {Component, Fragment} from 'react';
import './App.css';
import Button from "./componentes/Buttons";

//COMPONENTES
import Tarefas from "./componentes/Tarefas"; //  com export default no Tarefas.js
//import { Tarefas } from "./componentes/Tarefas"; //  com apenas export no Tarefas.js

function App() {
  return (
    <div className="App">
      {/* <Tarefas titulo="Lista com React"/> */}
      <Fragment>
        <h3>
           TYPES BUTTON
        </h3>
        <Button>default</Button>
        <Button type="primary">primary</Button>
        <Button type="error">error</Button>
        <Button type="success">success</Button>
        <Button type="warning">warning</Button>     
        <h3>
           SIZES BUTTON
        </h3>
        <Button type="primary" size="sm">primary</Button>
        <Button type="primary" size="md">primary</Button>
        <Button type="primary" size="lg">primary</Button>
        <Button type="primary" size="bg">primary</Button>
        <h3>
           ROUND BUTTON
        </h3>
        <Button round type="primary" size="bg">primary</Button>
      </Fragment>
    </div>
  );
}

export default App;
