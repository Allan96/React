import React, { Fragment } from 'react';
import avatar from '../../assets/img/avatar.png';

// BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// BOOTSTRAP

const Footer = () => (
   <Fragment>  
            <hr className="d-block d-lg-none" />
            <Container>
               <Row className="d-block d-lg-none">
                  <Col xs={12}>
                        <img src={avatar} alt="" className="avatar" width="100" />
                        <h1 className="c-ouro bold">Links:</h1>
                        <p>
                           <a href="mailto:yo@allan.souza.silva@usp.br">email</a><br/>
                           <a href="https://github.com/Allan96">github</a><br/>
                           <a href="https://www.linkedin.com/in/allan-souza-7446a9169/">linkedin</a><br/>
                           <a href="https://www.facebook.com/ASDSAllan">facebook</a><br />
                           <a href="https://www.instagram.com/allanasds">instagram</a>
                        </p>
                        </Col>
                  </Row>
            </Container>
            <footer></footer>
      </Fragment>
        );

export default Footer;