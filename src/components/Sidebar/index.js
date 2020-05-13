import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';

function Sidebar() {
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
        <Navbar as="ul">
            <div className="sidebar sidebar-sticky bg-light d-flex flex-column">
                <div>
                    <h4 className="px-2">
                        <a href="/home" className="navbar-brand m-0">
                            BZY KAI
                        </a>
                    </h4>
                </div>
                <div className="d-flex flex-column justify-content-between h-100">
                    <div>
                        <Nav className="h-100 d-flex flex-column">
                            {navItems.map((link, index) => (
                                <Nav.Item as="li" key={`list-${index}`}>
                                    <Nav.Link
                                        href={`/${link.page.toLowerCase()}`}
                                    >
                                        {link.page}
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
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
                        <a className="px-1" href="mailto:info@bzy-kai.com">
                            <i className="far fa-envelope fa-lg"></i>
                        </a>
                    </div>
                </div>
            </div>
        </Navbar>
    );
}

export default Sidebar;
