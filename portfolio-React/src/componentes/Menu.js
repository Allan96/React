import React, { Fragment } from 'react';

export default class Menu extends React.Component{
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
                                   {/* <img src="{logo}" alt=""/> */}
                                 </div>
                         </div>

                   </div>
               </div>
               <hr/>

               <div className="container">
            <div className="row">
                <div className="col-12">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Works</a>
                        </li>
                        <li className="nav-item"><a className="nav-link">/</a></li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Repository</a>
                        </li>
                        <li className="nav-item"><a className="nav-link">:</a></li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div id="works" className="row">
                                <div className="col-12 col-lg-4">
                                    <p className="bold c-white  d-block d-lg-none">Economática</p>
                                    <p className="d-block d-lg-none"> A maior empresa de informações financeiras sobre o mercado latino-americano</p>
                                    <div className="work-img d-flex">
                                        <div className="align-self-end d-none d-lg-block">
                                            <p>
                                                <b className="c-white">Economática</b>
                                                <br/> A maior empresa de informações financeiras sobre o mercado latino-americano
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <p className="bold c-white  d-block d-lg-none">Amadoria</p>
                                    <p className="d-block d-lg-none">A Amadoria contribui para o desenvolvimento pessoal e profissional dos indivíduos</p>
                                    <div className="work-img d-flex">
                                        <div className="align-self-end d-none d-lg-block">
                                            <p>
                                                <b className="c-white">Amadoria</b>
                                                <br/> A Amadoria contribui para o desenvolvimento pessoal e profissional dos indivíduos
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <p className="bold c-white  d-block d-lg-none">BPP</p>
                                    <p className="d-block d-lg-none">
                                        Colocam as pessoas e empresas no comando, possibilitando um gerenciamento de finanças e controle de operações...
                                    </p>
                                    <div className="work-img d-flex">
                                        <div className="align-self-end d-none d-lg-block">
                                            <p>
                                                <b className="c-white">BPP</b>
                                                <br/> Colocam as pessoas e empresas no comando, possibilitando um gerenciamento de finanças e controle de operações...
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <p className="bold c-white  d-block d-lg-none">BR Financial</p>
                                    <p className="d-block d-lg-none">
                                        Já ajudaram mais de 1.800 empresas a equacionarem seus fluxos de caixa e alcançarem níveis financeiros saudáveis...
                                    </p>
                                    <div className="work-img d-flex">
                                        <div className="align-self-end d-none d-lg-block">
                                            <p>
                                                <b className="c-white">BR Financial</b>
                                                <br/> Já ajudaram mais de 1.800 empresas a equacionarem seus fluxos de caixa e alcançarem níveis financeiros saudáveis ...
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div id="repository" className="row">
                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12" role="group" aria-label="Exemplo básico">
                                    <div className="col-3 col-lg-1">
                                        <a className="carousel-control-prev btn btn-secondary d-block" href="#carouselExampleControls" role="button" data-slide="prev">←</a>
                                        <a className="carousel-control-next btn btn-secondary d-block" href="#carouselExampleControls" role="button" data-slide="next">→</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <footer></footer>
           </Fragment>
        );
    }
}