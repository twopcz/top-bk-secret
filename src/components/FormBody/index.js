import Form from 'react-bootstrap/Form';
import React from 'react';

export default function FormBody() {
    const body = [
        {
            control: `email`,
            label: `Email`,
            invalid: `Please enter your email.`
        },
        {
            control: `shoeStyle`,
            label: `Shoe Style`,
            invalid: `Please enter a shoe style.`
        },
        {
            control: `shoeSizeSelect`,
            label: `Shoe Size (US MEN'S)`
        }
    ];

    const shoeSizes = [
        5,
        5.5,
        6,
        6.5,
        7,
        7.5,
        8,
        8.5,
        9,
        9.5,
        10,
        10.5,
        11,
        11.5,
        12,
        12.5,
        13,
        13.5,
        14,
        15,
        `Other`
    ];

    return (
        <div className="form-body">
            {body.map((data, index) => (
                <Form.Group controlId={data.control} key={`form-body-${index}`}>
                    <Form.Label>
                        <b>{data.label.toUpperCase()}</b>
                    </Form.Label>
                    {data.label === `Shoe Size (US MEN'S)` ? (
                        <Form.Control required as="select">
                            {shoeSizes.map((size, index) => (
                                <option key={`shoe-size-${index}`}>
                                    {size}
                                </option>
                            ))}
                        </Form.Control>
                    ) : (
                        <>
                            <Form.Control
                                required
                                type="text"
                                placeholder={data.label}
                            />
                            <Form.Control.Feedback type="invalid">
                                {data.invalid}
                            </Form.Control.Feedback>
                        </>
                    )}
                </Form.Group>
            ))}
        </div>
    );
}
