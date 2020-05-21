import './style.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Content from '../Content';

export default function Sidebar2() {
    const navItems = [
        {
            page: 'SHOP'
        },
        {
            page: 'CONTACT'
        },
        {
            page: 'TERMS'
        }
    ];

    return (
        <Container fluid>
            <Row className="min-vh-100 flex-column flex-md-row">
                <Col md={1} className="p-0 bg-light">
                    <Navbar
                        expand
                        bg="light"
                        className="flex-md-column flex-row sidebar2 h-100 py-2"
                    >
                        <Navbar.Collapse className="side-nav h-100 w-100">
                            <ul class="flex-md-column flex-row justify-content-between navbar-nav h-100 w-100">
                                <div className="d-flex flex-row flex-md-column">
                                    <Nav.Item as="li">
                                        <Nav.Link href="/">
                                            <b>BZY KAI</b>
                                        </Nav.Link>
                                    </Nav.Item>
                                    {navItems.map((link, index) => (
                                        <Nav.Item as="li" key={`list-${index}`}>
                                            <Nav.Link
                                                href={`/${link.page.toLowerCase()}`}
                                                className="text-center text-md-left"
                                            >
                                                {link.page}
                                            </Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </div>
                                <div className="text-center py-2 contact-info">
                                    <a
                                        href="https://www.instagram.com/bzy.kai/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-1"
                                    >
                                        <i className="fab fa-instagram fa-lg"></i>
                                    </a>
                                    <a
                                        className="px-1"
                                        href="mailto:info@bzy-kai.com"
                                    >
                                        <i className="far fa-envelope fa-lg"></i>
                                    </a>
                                </div>
                            </ul>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
                <Col md={11} className="py-3">
                    <Content />
                </Col>
            </Row>
        </Container>
    );
}
