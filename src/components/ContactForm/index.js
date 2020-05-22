import axios from 'axios';
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
        } else {
            setValidated(true);
            const firstName = document.getElementById(`firstName`).value;
            const lastName = document.getElementById(`lastName`).value;
            const email = document.getElementById(`email`).value;
            const shoeStyle = document.getElementById(`shoeStyle`).value;
            const shoeSize = document.getElementById(`shoeSize`).value;
            const info = document.getElementById(`info`).value;

            axios({
                method: `POST`,
                url: `http://localhost:3000/send`,
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    shoeStyle: shoeStyle,
                    shoeSize: shoeSize,
                    info: info
                }
            }).then((res) => {
                if (res.data.msg === `success`) {
                    console.log(`Message Sent`);
                    resetForm();
                } else if (res.data.msg === `fail`) {
                    console.log(`Failed to send`);
                }
            });
        }
    };

    // const handleBtnSubmit = (event) => {
    //     event.preventDefault();
    //     const firstName = document.getElementById(`firstName`).value;
    //     const lastName = document.getElementById(`lastName`).value;
    //     const email = document.getElementById(`email`).value;
    //     const shoeStyle = document.getElementById(`shoeStyle`).value;
    //     const shoeSize = document.getElementById(`shoeSize`).value;
    //     const info = document.getElementById(`info`).value;

    //     axios({
    //         method: `POST`,
    //         url: `http://localhost:3000/send`,
    //         data: {
    //             firstName: firstName,
    //             lastName: lastName,
    //             email: email,
    //             shoeStyle: shoeStyle,
    //             shoeSize: shoeSize,
    //             info: info
    //         }
    //     }).then((res) => {
    //         if (res.data.msg === `success`) {
    //             console.log(`Message Sent`);
    //             resetForm();
    //         } else if (res.data.msg === `fail`) {
    //             console.log(`Failed to send`);
    //         }
    //     });
    // };

    const resetForm = () => {
        document.getElementById(`contact-form`).reset();
    };

    return (
        <Container className="py-3">
            <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                id="contact-form"
            >
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
