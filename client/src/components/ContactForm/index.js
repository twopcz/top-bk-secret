import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import FormBody from '../FormBody';
import FormName from '../FormName';
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
            const email = document.getElementById(`email`).value;
            const firstName = document.getElementById(`firstName`).value;
            const info = document.getElementById(`info`).value;
            const lastName = document.getElementById(`lastName`).value;
            const shoeSize = document.getElementById(`shoeSize`).value;
            const shoeStyle = document.getElementById(`shoeStyle`).value;

            const templateParams = {
                subject: `Custom Inquiry From BZY-KAI.com - ${shoeStyle} ${shoeSize}`,
                name: `Name: ${firstName} ${lastName}`,
                email: `Email: ${email}`,
                shoes: `Shoes: ${shoeStyle} ${shoeSize}`,
                message: info
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
                <FormName />
                <FormBody />
                <FormText />
                <Button variant="dark" type="submit">
                    {buttonState}
                </Button>
            </Form>
        </Container>
    );
}
