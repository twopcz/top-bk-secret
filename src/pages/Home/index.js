import './style.css';
import { Col } from 'react-bootstrap';
import Gallery from '../../components/Gallery';
import React from 'react';

export default function Home() {
    return (
        <Col md={11} className="px-0 px-md-4">
            <Gallery />
        </Col>
    );
}
