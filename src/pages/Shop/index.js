import './style.css';
import { Col } from 'react-bootstrap';
import React from 'react';
import Countdown from 'react-countdown';
import Union from './union1s.png';

export default function Shop() {
    return (
        <Col className="my-auto d-flex flex-column justify-content-center">
            <Col md={6} className="text-center mx-auto">
                <img src={Union} className="img-fluid" alt="laker-unions"></img>
            </Col>
            <Col md={6} className="text-center mx-auto">
                <div className="counter">
                    <Countdown date={new Date(1590346800000)} />
                </div>
            </Col>
        </Col>
    );
}
