import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Sidebar from '../../components/Sidebar';
import './style.css';

export default function Home() {
  return (
    <div>
    <Sidebar />
      {/* <Navbar bg="light" id="sidebar">
        <Navbar.Brand className="font-weight-bold" href="#home">
          BZY KAI
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#features">CONTACT</Nav.Link>
          <Nav.Link href="#pricing">PRICING</Nav.Link>
          <Nav.Link href="#pricing">PREVIOUS WORKS</Nav.Link>
        </Nav>
      </Navbar> */}
    </div>
  );
}
