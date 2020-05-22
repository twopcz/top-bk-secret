import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Contact from './pages/Contact';
import Home from './pages/Home';
import React from 'react';
import Shop from './pages/Shop';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <Router>
            <Container fluid className="h-100">
                <Row className="min-vh-100 flex-column flex-md-row">
                    <Sidebar />
                    <Route exact path="/" component={Home} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/contact" component={Contact} />
                </Row>
            </Container>
        </Router>
    );
}

export default App;
