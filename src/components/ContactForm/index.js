import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import FormBody from '../FormBody';
import FormName from '../FormName';
import FormText from '../FormText';

export default function ContactForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <Container className="py-3">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <FormName />
                <FormBody />
                <FormText />
                <Button variant="dark" type="submit">
                    SEND
                </Button>
            </Form>
        </Container>
    );
}
