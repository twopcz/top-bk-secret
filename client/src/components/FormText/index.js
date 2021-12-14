import Form from 'react-bootstrap/Form';
import React from 'react';

export default function FormText() {
    return (
        <Form.Group controlId="info">
            <Form.Label>
                <b>MESSAGE</b>
            </Form.Label>
            <Form.Control
                required
                as="textarea"
                rows="4"
                placeholder="Confirm if you currently own base shoe or if they need to be ordered, if the project is time sensitive or if you’re okay to wait, projected budget, and/or any additional details."
            />
            <Form.Control.Feedback type="invalid">
                Please enter details regarding your inquiry.
            </Form.Control.Feedback>
        </Form.Group>
    );
}
