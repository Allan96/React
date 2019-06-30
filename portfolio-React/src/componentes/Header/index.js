import React, { Fragment } from 'react';
import avatar from '../../assets/img/avatar.png';

// BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'
// BOOTSTRAP

const Header = () => (
<Fragment>
   <Container>
      <Row>
         <Col xs={12} lg={5}>
         <h1 className="c-pink bold">Allan_Souza()</h1>
         <p>
            Iniciei em 2012, como BackEnd, trabalho há 4 anos como <b className="c-white">fullstack</b> e atualmente estou cursando 
            <b className="c-white"> matemática</b> na Universidade de São Paulo <b className="c-white">(USP)</b>.
            <br/><br/>
            Autodidata aprendi algumas linguagens de programação lendo fóruns, livros, e vendo video aulas.
            <br/><br/>
            Algumas habilidades:
         </p>
         <p className="c-white">
            <Carousel>
               <Carousel.Item> [“php”, “html”, “javascript”, “css3”, “python”,</Carousel.Item>
               <Carousel.Item> “JQuery”, “Bootstrap”, “git”, “gulp”, “sass”, “Mysql”,</Carousel.Item>
               <Carousel.Item>  “SQL”]</Carousel.Item>
            </Carousel>
         </p>
         </Col>
         <Col xs={12} lg={7} className="d-none d-lg-block text-right">
         <h1 className="c-ouro bold">Links:</h1>
         <p className="text-right">
            <a href="mailto:yo@allan.souza.silva@usp.br"   rel="noopener">email</a><br/>
            <a href="https://github.com/Allan96"   rel="noopener">github</a><br/>
            <a href="https://www.linkedin.com/in/allan-souza-7446a9169/"   rel="noopener">linkedin</a><br/>
            <a href="https://www.facebook.com/ASDSAllan"   rel="noopener">facebook</a><br/>
            <a href="https://www.instagram.com/allanasds/"   rel="noopener">instagram</a>
         </p>
         <div className="zoom">
            <img src={avatar} alt=""/>
         </div>
         </Col>
      </Row>
   </Container>
</Fragment>
);
export default Header;