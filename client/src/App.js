import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Lookbook from './pages/Lookbook';
import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <Router>
            <Container fluid className="h-100 pt-2 pt-md-0">
                <Row className="min-vh-100 flex-column flex-md-row">
                    <Sidebar />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/lookbook" component={Lookbook} />
                </Row>
            </Container>
        </Router>
    );
}

export default App;
