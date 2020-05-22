import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import React from 'react';

export default function FormName() {
    const labels = [
        {
            label: 'First Name',
            invalid: 'Please enter your first name.'
        },
        {
            label: 'Last Name',
            invalid: 'Please enter your last name'
        }
    ];

    return (
        <Form.Group controlId="name">
            <Form.Row>
                {labels.map((data, index) => (
                    <Col key={`name-${index}`}>
                        <Form.Label>
                            <b>{data.label.toUpperCase()}</b>
                        </Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder={data.label}
                        />
                        <Form.Control.Feedback type="invalid">
                            {data.invalid}
                        </Form.Control.Feedback>
                    </Col>
                ))}
            </Form.Row>
        </Form.Group>
    );
}
