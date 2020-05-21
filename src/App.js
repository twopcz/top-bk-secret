import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import React from 'react';

function App() {
    return (
        <Router>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/" component={Shop} />
        </Router>
    );
}

export default App;
