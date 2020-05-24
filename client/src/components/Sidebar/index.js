import './style.css';
import { Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

export default function Sidebar() {
    const navItems = [
        {
            page: 'SHOP',
            url: 'https://shop.bzy-kai.com/'
        },
        {
            page: 'CONTACT',
            url: '/contact'
        }
    ];

    return (
        <Col md={1} className="p-0 bg-light sidebar-container">
            <Navbar
                expand
                bg="light"
                className="flex-md-column flex-row sidebar h-100 py-2"
            >
                <Navbar.Collapse className="side-nav h-100 w-100">
                    <ul className="flex-md-column flex-row justify-content-between navbar-nav h-100 w-100">
                        <div className="d-flex flex-row flex-md-column">
                            <Nav.Item as="li">
                                <Nav.Link href="/home">
                                    <b>BZY KAI</b>
                                </Nav.Link>
                            </Nav.Item>
                            {navItems.map((link, index) => (
                                <Nav.Item as="li" key={`list-${index}`}>
                                    <Nav.Link
                                        href={link.url}
                                        className="text-center text-md-left"
                                    >
                                        {link.page}
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </div>
                        <div className="d-flex justify-content-center py-2 contact-info">
                            <a
                                href="https://www.instagram.com/bzy.kai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="my-auto"
                            >
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                        </div>
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        </Col>
    );
}
