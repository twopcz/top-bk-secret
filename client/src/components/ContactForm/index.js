import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import FormBody from '../FormBody';
import FormText from '../FormText';

export default function ContactForm() {
    const [validated, setValidated] = useState(false);
    const [buttonState, setButtonState] = useState(`SEND`);

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity() === true) {
            event.preventDefault();
            const name = document.getElementById(`name`).value;
            const email = document.getElementById(`email`).value;
            const instagram = document.getElementById(`instagram`).value;
            const shoe = document.getElementById(`shoe`).value;
            const size = document.getElementById(`size`).value;
            const service = document.getElementById(`service`).value;
            const location = document.getElementById(`location`).value;
            const message = document.getElementById(`info`).value;

            const templateParams = {
                subject: `Inquiry From ANT-KAI.com`,
                name: `Name: ${name}`,
                email: `Email: ${email}`,
                instagram: `Instagram: ${instagram}`,
                shoe: `Style: ${shoe}`,
                size: `Size: ${size}`,
                service: `Service: ${service}`,
                location: `Shipping: ${location}`,
                message: message
            };

            setButtonState(`SENDING...`);

            emailjs
                .send(
                    `smtp_server`,
                    `contact_form`,
                    templateParams,
                    `user_cNhdGA7J3lfOtA7SxL1te`
                )
                .then(
                    (response) => {
                        setButtonState(`SENT`);
                        console.log(
                            `Email sent successfully.`,
                            response.status,
                            response.text
                        );
                        resetForm();
                    },
                    (err) => {
                        console.log(`Email failed to send.`, err);
                    }
                );
        }
    };

    const resetForm = () => {
        document.getElementById(`contact-form`).reset();
        setValidated();
        setButtonState(`SEND`);
    };

    return (
        <Container className="py-3">
            <Form
                noValidate
                validated={validated}
                method="POST"
                onSubmit={handleSubmit}
                id="contact-form"
            >
                {/* <FormName /> */}
                <FormBody />
                <FormText />
                <Button variant="dark" type="submit">
                    {buttonState}
                </Button>
            </Form>
        </Container>
    );
}
