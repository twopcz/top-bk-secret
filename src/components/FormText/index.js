import Form from 'react-bootstrap/Form';
import React from 'react';

export default function FormText() {
    return (
        <Form.Group controlId="info">
            <Form.Label>
                <b>INFO</b>
            </Form.Label>
            <Form.Control
                required
                as="textarea"
                rows="4"
                placeholder="Additional Information"
            />
            <Form.Control.Feedback type="invalid">
                Please enter details regarding your custom shoe inquiry.
            </Form.Control.Feedback>
        </Form.Group>
    );
}
