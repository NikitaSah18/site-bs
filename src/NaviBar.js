import React, { useState } from 'react';
import { Navbar, Nav, Button, Container, Modal, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Styled from 'styled-components';


const Styles = Styled.div `
a, .navbar-brand, .navbar-nav .nav-link {
    color: #2b2b2b;
    &:hover {
        text-decoration: none;
        color: white;
        text-decoration-line:none;
    }
}
`


export default function NaviBar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Styles>
                <Navbar  className='me-auto mb-2 mb-lg-0' collapseOnSelect expand="lg" bg="warning" variant="dark" >
                    <Navbar.Brand> Банк Тинькок</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" />
                    <Nav >

                        <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link ><Link to="/Company">О комании</Link></Nav.Link>
                        <Nav.Link ><Link to="/Credits">Кредитные карты</Link> </Nav.Link>
                    </Nav>
                    <Nav>

                        <Button onClick={handleShow}>
                            Войти</Button>
                    </Nav>
                </Navbar>
            </Styles>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Войти
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasikName">
                            <Form.Label> Введите email </Form.Label>
                            <Form.Control type="email" placeholder="Введите почту" />
                            <Form.Text classname="text-muted">Существоющий адрес</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="fromBasikPassword">
                            <Form.Label> Пароль </Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Form.Group controlId="fromBasikCheckBox">
                            <Form.Check type="checkBox" label="Запомнить" />
                        </Form.Group>
                        <Button>
                            Войти
                        </Button> &nbsp;&nbsp;&nbsp;
                        <Button>
                            Зарегистрироваться
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal> 
        </>
    )
}