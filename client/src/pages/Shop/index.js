import './style.css';
import { Col } from 'react-bootstrap';
import React from 'react';
import Countdown from 'react-countdown';
import Union from './union1s.png';

export default function Shop() {
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return (
                <span>
                    <a
                        href="https://shop.bzy-kai.com/"
                        className="text-dark"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://shop.bzy-kai.com/
                    </a>
                </span>
            );
        } else {
            return (
                <span>
                    {hours}:{minutes}:{seconds}
                </span>
            );
        }
    };

    return (
        <Col className="my-auto d-flex flex-column justify-content-center pt-5 pt-md-0 mt-5">
            <Col md={6} className="text-center mx-auto">
                <img src={Union} className="img-fluid" alt="laker-unions"></img>
            </Col>
            <Col md={6} className="mx-auto">
                <div className="text-center counter">
                    <Countdown
                        date={new Date(1590346800000)}
                        renderer={renderer}
                    />
                </div>
            </Col>
        </Col>
    );
}
