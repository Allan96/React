//IMAGENS
import avatar from './assets/img/avatar.png';

//LIBS
import React, { Fragment } from 'react';
import Header from './componentes/Header';
import Menu from './componentes/Menu';
import RepoWorks from './componentes/RepoWorks';


function App() {
  return (
    <Fragment>
        <Header />
        <RepoWorks />
        <Footer />
    </Fragment>
    
  )
};

export default App;
