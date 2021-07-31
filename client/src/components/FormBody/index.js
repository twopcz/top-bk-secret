import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';

export default function FormBody() {
    const body = [
        [
            {
                control: `name`,
                label: `Name`,
                invalid: `Please enter your name.`
            },
            {
                control: `instagram`,
                label: `Instagram`,
                placeHolder: `@`,
                invalid: `Please enter your handle.`
            }
        ],
        [
            {
                control: `email`,
                label: `Email`,
                invalid: `Please enter your email.`
            }
        ],
        [
            {
                control: `shoe`,
                label: `Base Shoe`,
                invalid: `Please enter information about the base shoe.`,
                size: 8
            },
            {
                control: `size`,
                label: `Size`,
                text: `(US MEN'S)`
            }
        ],
        [
            {
                control: `service`,
                label: `Service`
            },
            {
                control: `location`,
                label: `Shipping`
            }
        ]
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

    const services = [`Aging`, `Custom`];

    const shipping = [`USA`, `International`];

    return (
        <div className="form-body">
            {body.map((data, index) => (
                <Row key={`form-row-${index}`}>
                    {data.map((form, index) => (
                        <Col
                            xs={form.size}
                            key={`${form.control}-col-${index}`}
                        >
                            <Form.Group
                                controlId={form.control}
                                key={`form-group-${index}`}
                            >
                                <Form.Label>
                                    <b>{form.label.toUpperCase()}</b>
                                </Form.Label>
                                {form.control === `size` ||
                                form.label === `Service` ||
                                form.label === `Shipping` ? (
                                    <Form.Control required as="select">
                                        {form.control === `size`
                                            ? shoeSizes.map((size, index) => (
                                                  <option
                                                      value={`${size}`}
                                                      key={`select-size-${index}`}
                                                  >
                                                      {size}
                                                  </option>
                                              ))
                                            : form.control === `service`
                                            ? services.map((service, index) => (
                                                  <option
                                                      value={`${service}`}
                                                      key={`select-service-${index}`}
                                                  >
                                                      {service}
                                                  </option>
                                              ))
                                            : shipping.map(
                                                  (location, index) => (
                                                      <option
                                                          value={`${location}`}
                                                          key={`select-location-${index}`}
                                                      >
                                                          {location}
                                                      </option>
                                                  )
                                              )}
                                    </Form.Control>
                                ) : (
                                    <>
                                        <Form.Control
                                            required
                                            type={
                                                form.label === `Email`
                                                    ? `email`
                                                    : `text`
                                            }
                                            placeholder={
                                                !form.placeHolder
                                                    ? form.label
                                                    : form.placeHolder
                                            }
                                            key={`${form.control}-${index}`}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {form.invalid}
                                        </Form.Control.Feedback>
                                    </>
                                )}
                                <Form.Text>
                                    {form.text ? form.text : ``}
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    ))}
                </Row>
            ))}
        </div>
    );
}
