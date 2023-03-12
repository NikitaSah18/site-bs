import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import credit2 from './images/credit2.jpg';
import people from './images/people.jpg'
import { Link } from 'react-router-dom';
import ipoteka from './images/ipoteka.jpg'

import Slider from './Slider';
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />)


    
export const Home = () => (
    <>
        <Slider />
        <ColoredLine color="yellow" />
        <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}  >
            <Row>
                <Col>
                    <Card style={{ width: '19rem' }}>
                        <Card.Img variant="top" src={credit2.substring(1)} alt="Credit" />
                        <Card.Body>
                            <Card.Title> Микрозайм </Card.Title>
                            <Card.Text>
                                Беспроцентный период до 120 дней
                            </Card.Text>
                            <Link to="/Form">
                            <Button variant="warning">
                                
                                Подать заявку
                               
                            </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '19rem' }}>
                        <Card.Img  variant="top" src='https://moneyman.ru/wp-content/uploads/2020/07/Kreditnaya-ekspress-karta.jpg' />
                        <Card.Body>
                            <Card.Title> Потребительский кредит </Card.Title>
                            <Card.Text>
                                Беспроцентный период до 90 дней
                            </Card.Text>
                            <Link to="/Form">
                            <Button variant="warning">
                                Подать заявку
                            </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '19rem' }}>
                        <Card.Img  variant="top" src={ipoteka} />
                        <Card.Body>
                            <Card.Title> Ипотечное кредитование </Card.Title>
                            <Card.Text>
                                Беспроцентный период до 120 дней
                            </Card.Text>
                            <Link to="/Form">
                            <Button variant="warning">
                                Подать заявку
                            </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <ColoredLine color="yellow" />
        <Container style={{ marginBottom: '100px' }}>

            <Row>
                <Col mr={7}>
                    <img src={people} height={400} />
                </Col>
                <Col mr={7}>

                    <div>
                        На сегодняшний день Тинькок является абсолютным лидером российской банковской системы.
                        По своим рыночным позициям, по объему активов и капитала, по своим финансовым результатам и масштабам инфраструктуры Банк в несколько раз превосходит своих ближайших конкурентов. Масштаб и устойчивость Банка особенно явственно проявляются в периоды нестабильности на финансовых рынках. За последние годы Банком проведена большая работа, которая обеспечила окончательное формирование основной группы конкурентных преимуществ Банка, а именно:
                        значительная клиентская база во всех сегментах (корпоративные и розничные, крупные и мелкие клиенты) и во всех регионах страны.

                    </div>

                </Col>
            </Row>
        </Container>
    </>
)