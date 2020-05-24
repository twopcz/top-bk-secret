import { Col } from 'react-bootstrap';
import ContactForm from '../../components/ContactForm';
import React from 'react';
import Profile from './profile.jpg';

export default function Contact() {
    return (
        <Col className="my-auto d-flex flex-column justify-content-center pt-5 pt-md-0">
            <Col md={6} className="text-center mx-auto">
                <img src={Profile} className="img-fluid" alt="profile"></img>
            </Col>
            <Col md={6} className="mx-auto">
                <ContactForm />
            </Col>
        </Col>
    );
}
