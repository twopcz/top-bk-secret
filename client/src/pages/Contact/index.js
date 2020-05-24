import { Col } from 'react-bootstrap';
import ContactForm from '../../components/ContactForm';
import React from 'react';
import Profile from './profile-1200.png';

export default function Contact() {
    return (
        <Col className="my-auto d-flex flex-column flex-md-row justify-content-center pt-5 pt-md-0 px-0">
            <Col md={6} className="text-center mx-auto px-0">
                <img src={Profile} className="img-fluid" alt="profile"></img>
            </Col>
            <Col md={6} className="mx-auto my-auto">
                <ContactForm />
            </Col>
        </Col>
    );
}
