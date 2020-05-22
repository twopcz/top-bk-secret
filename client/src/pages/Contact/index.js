import { Col } from 'react-bootstrap';
import ContactForm from '../../components/ContactForm';
import React from 'react';
import Union from './union1s.png';

export default function Contact() {
    return (
        <Col className="my-auto d-flex flex-column justify-content-center">
            <Col md={6} className="text-center mx-auto">
                <img src={Union} className="img-fluid" alt="laker-unions"></img>
            </Col>
            <Col md={6} className="mx-auto">
                <ContactForm />
            </Col>
        </Col>
    );
}
