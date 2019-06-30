import React, { Fragment } from 'react';

// BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Tabs from 'react-bootstrap/Tabs'; 
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'
// BOOTSTRAP

const RepoWorks = () => (
<Fragment>
   <Container>
      <Row>
         <Col xs={12}>
         <Tabs defaultActiveKey="Trabalhos" id="uncontrolled-tab-example">
            <Tab eventKey="Trabalhos" title="Trabalhos">
               <Row id="works">
                  <Col xs={12} lg={4}>
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
                  </Col>
                  <Col xs={12} lg={4}>
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
                  </Col>
                  <Col xs={12} lg={4}>
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
                  </Col>
               </Row>
            </Tab>
            <Tab eventKey="/" title="/" disabled></Tab>
            <Tab eventKey="profile" title="Repositórios:">
            <Container>
               <Row id="works">
               <Carousel>
            <Carousel.Item>
                <Row>
                  <Col xs={12} lg={4} class="b-dashed">
                  <p class="bold c-white"> 
                     <a href="https://github.com/Allan96/AAAMAT" > AAAMAT → </a>
                  </p>
                  <p>AAAMAT uma instituição criada e gerenciada por alunos do IME-USP que proporciona atividades
                     extracurriculares ligadas ao esporte universitário. 
                  </p>
                  </Col>
                  <Col xs={12} lg={4} class="b-dashed">
                  <p class="bold c-white"> 
                     <a href="https://github.com/Allan96/Biblioteca" > Biblioteca → </a>
                  </p>
                  <p>Biblioteca com códigos javascript/css/html já codados para facilitar o desenvolvimento. </p>
                  </Col>
                  <Col xs={12} lg={4} class="b-dashed">
                  <p class="bold c-white"> <a href="https://github.com/Allan96/descubra" > descubra → </a></p>
                  <p>#Descubra é um projeto desenvolvido em uma Hackaton que foi feito na empresa Martin Luz </p>
                  </Col>
                  </Row>
                  </Carousel.Item>
            <Carousel.Item>
            <Row>
                  <Col xs={12} lg={4} class="b-dashed">
                  <p class="bold c-white"> <a href="https://github.com/Allan96/EmailAPI" > EmailAPI → </a></p>
                  <p>E-mail API, é uma plataforma para automatizar e-mails marketing, inicialmente está sendo desenvolvido para automatizar processos de emkt mais em breve terá outras features muito mais avançadas e robustas </p>
                  </Col>
                  <Col xs={12} lg={4} class="b-dashed">
                  <p class="bold c-white"> <a href="https://github.com/Allan96/Insign" > Insign → </a></p>
                  <p>Redesenho do site da empresa de impressão Insign (http://www.insign.com.br/), projeto está pausado. </p>
                  </Col>
                  <Col xs={12} lg={4} class="b-dashed">
                  <p class="bold c-white"> <a href="https://github.com/Allan96/Portfolio" > Portfolio → </a></p>
                  <p>Um louco por programação e matemática, que sempre procura saber ainda mais sobre essas duas áreas Cursando Matemática na Universidade de São Paulo - USP </p>
                  </Col>
                  </Row>
                  </Carousel.Item>
            <Carousel.Item>
            <Row>
                  <Col xs={12} lg={4} class="b-dashed">
                  <p class="bold c-white"> <a href="https://github.com/Allan96/Press" > Press → </a></p>
                  <p>A Press é uma plataforma online que permitirá o compartilhamento de textos em geral entre escritores e leitores interessados nos assuntos. </p>
                  </Col>
                  
                  <Col xs={12} lg={4} class="b-dashed">
                  <p class="bold c-white"> <a href="https://github.com/Allan96/Projetos-Lands" > Projetos-Lands → </a></p>
                  <p>Projetos-Lands é um projeto pessoal para aperfeiçoamento e testes de frameworks. </p>
                  </Col>

                  <Col xs={12} lg={4} class="b-dashed">
                  <p class="bold c-white"> <a href="https://github.com/Allan96/React" > React → </a></p>
                  <p>Todos os projetos nesse repositório é para fins de estudos e aperfeiçoamento em React. </p>
                  </Col>
                  </Row>
                  </Carousel.Item>
                  </Carousel>
               </Row>
               </Container>
            </Tab>
         </Tabs>
         </Col>
      </Row>
   </Container>
</Fragment>
);
export default RepoWorks;