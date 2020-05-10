import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';

function Sidebar() {
  const navItems = [
    {
      page: 'WORKS',
    },
    {
      page: 'INFO',
    },
    {
      page: 'CONTACT',
    },
  ];

  return (
    <Navbar as="ul">
      <div className="sidebar sidebar-sticky bg-light d-flex flex-column justify-content-between">
        <div>
          <h4 className="px-3">
            <a href="/home" className="navbar-brand m-0">
              BZY KAI
            </a>
          </h4>
        </div>
        <div>
          <Nav className="h-100 d-flex flex-column">
            {navItems.map((link, index) => (
              <Nav.Item as="li" key={`list-${index}`}>
                <Nav.Link href={`/${link.page.toLowerCase()}`}>
                  {link.page}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>
      </div>
    </Navbar>
  );
}

export default Sidebar;
