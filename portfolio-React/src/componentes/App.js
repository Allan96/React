// CSS
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/main.css';

//LIBS
import React, { Fragment } from 'react';
import Header from './Header/';
import RepoWorks from './RepoWorks';
import Footer from './Footer/';


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
