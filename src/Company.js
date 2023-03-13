import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import valuev from './images/eco.jpg'


export const Company = () => (
    <>
        <h2>Тинькок сегодня</h2>
        <font  className = "m-3"size ="5">Тинькок — крупнейший банк в России, Центральной и Восточной Европе, один из ведущих международных финансовых институтов.</font>
        &nbsp;&nbsp;&nbsp;
        <Container>
            <Row>
            
                <Col mr={7}>
                    <img src={valuev} height={400} />
                </Col>

            </Row>
        </Container>
        &nbsp;&nbsp;&nbsp;
        
        <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h3 class="display-7 fw-bold">Миссия банка</h3>
        <p class="col-md-6 fs-4">Мы даём людям уверенность и надёжность, делаем их жизнь лучше, помогая реализовывать устремления и мечты.</p>
        <Link to="/Form"><button type="button" class="btn btn-secondary">Попробывать продукт</button></Link>
      </div>
    </div>
    <h2>Главная цель Стратегии 2023</h2>
    <font  className= "md-3" size ="5">Тинькок — доверенный помощник и навигатор в меняющемся мире: помогает человеку, бизнесу и стране стабильно развиваться благодаря построению полностью интегрированной экосистемы, которая работает по формуле 2+2=5.  &nbsp;&nbsp;&nbsp; 
         </font>
    &nbsp;&nbsp;&nbsp; 
        
.


    </>
)

export default Company;
