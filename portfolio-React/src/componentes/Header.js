import React, { Fragment } from 'react';
import avatar from '../assets/img/avatar.png';

export default class Header extends React.Component{
    render(){
        return (
            <Fragment>  
                <div className="container">
                   <div className="row">
                       <div className="col-12 col-lg-5">
                       <h1 className="c-pink bold">Allan_Souza()</h1>
                        <p>
                            Iniciei em 2012, como BackEnd, trabalho há 4 anos como <b className="c-white">fullstack</b> e atualmente estou cursando 
                            <b className="c-white">matemática</b> na Universidade de São Paulo <b className="c-white">(USP)</b>.
                            <br/><br/>
                            Autodidata aprendi algumas linguagens de programação lendo fóruns, livros, e vendo video aulas.
                            <br/><br/>
                            Algumas habilidades:
                        </p>
                        <p className="c-white">
                            [“php”, “html”, “javascript”, “css3”, “python”, “JQuery”, “Bootstrap”, “git”, “gulp”, “sass”, “Mysql”, “SQL”]
                        </p>
                       </div>
                       <div className="col-12 d-none d-lg-block col-lg-7 text-right">
                             <h1 className="c-ouro bold">Links:</h1>
                                <p className="text-right">
                                    <a href="mailto:yo@allan.souza.silva@usp.br" target="_blank">email</a><br/>
                                    <a href="https://github.com/Allan96" target="_blank">github</a><br/>
                                    <a href="https://www.linkedin.com/in/allan-souza-7446a9169/" target="_blank">linkedin</a><br/>
                                    <a href="https://www.facebook.com/ASDSAllan" target="_blank">facebook</a><br/>
                                    <a href="https://www.instagram.com/allanasds/" target="_blank">instagram</a>
                                </p>
                                 <div className="zoom">
                                   <img src={avatar} alt=""/>
                                 </div>
                         </div>

                   </div>
               </div>
               <hr/>
            </Fragment>
        );
    }

}