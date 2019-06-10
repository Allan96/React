import React, { Fragment } from 'react';
import avatar from '../assets/img/avatar.png';

export default class Footer extends React.Component{
    render(){
        return (
            
           <Fragment>  
        <hr className="d-block d-lg-none" />
        <div className="container d-block d-lg-none">
            <div className="row">
                <div className="col-12">
                    <img src={avatar} alt="" className="avatar" width="184" />
                    <h1 className="c-ouro bold">Links:</h1>
                    <p>
                        <a href="mailto:yo@allan.souza.silva@usp.br" target="_blank">email</a><br/>
                        <a href="https://github.com/Allan96" target="_blank">github</a><br/>
                        <a href="https://www.linkedin.com/in/allan-souza-7446a9169/" target="_blank">linkedin</a><br/>
                        <a href="https://www.facebook.com/ASDSAllan" target="_blank">facebook</a><br />
                        <a href="https://www.instagram.com/allanasds" target="_blank">instagram</a>
                    </p>
                </div>
            </div>
        </div>
        <footer></footer>
           </Fragment>
        );
    }
}