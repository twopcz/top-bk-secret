import './style.css';
import { Col } from 'react-bootstrap';
import Gallery from '../../components/Gallery';
import Portfolio from '../../assets/portfolioData';
import React from 'react';

export default function Home() {
    return (
        <Col md={11} className="px-0 px-md-4 pt-5 pt-md-0">
            <Gallery images={Portfolio} />
        </Col>
    );
}
