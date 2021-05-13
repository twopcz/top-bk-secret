import './style.css';
import { Col } from 'react-bootstrap';
import Gallery from '../../components/Lookbook';
import Pictures from '../../assets/lookbookData';
import React from 'react';

export default function Lookbook() {
    return (
        <Col md={11} className="px-0 px-md-4 pt-5 pt-md-0">
            <Gallery images={Pictures} />
        </Col>
    );
}
