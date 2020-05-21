import './style.css';
import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import Countdown from 'react-countdown';
import Union from './union1s.png';

export default function Shop() {
    return (
        <Container fluid className="h-100">
            <Row className="h-100">
                <div className="my-auto mx-auto">
                    <div className="d-flex flex-column">
                        <Col md={8} className="text-center mx-auto">
                            <img
                                src={Union}
                                className="img-fluid"
                                alt="laker-unions"
                            ></img>
                        </Col>
                        <Col md={8} className="text-center mx-auto">
                            <div className="counter">
                                <Countdown date={new Date(1590346800000)} />
                            </div>
                        </Col>
                    </div>
                </div>
            </Row>
        </Container>
    );
}
