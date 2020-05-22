import './style.css';
import { Col } from 'react-bootstrap';
import React from 'react';
import Countdown from 'react-countdown';
import Union from './union1s.png';

export default function Shop() {
    return (
        <Col className="my-auto d-flex flex-column justify-content-center pt-5 pt-md-0 mt-5">
            <Col md={6} className="text-center mx-auto">
                <img src={Union} className="img-fluid" alt="laker-unions"></img>
            </Col>
            <Col md={6} className="mx-auto">
                <div className="text-center counter">
                    <Countdown date={new Date(1590346800000)} />
                </div>
                <div className="py-3">
                    <div className="text-center shoe-title pb-2">
                        <h2>Air Jordan 1 Union Lakers</h2>
                    </div>
                    {/* <div className="shoe-description">
                        Made to order.
                        <br></br>Cost includes customization service done on a
                        100% authentic pair of Air Jordan 1s, which will be
                        provided.
                        <br></br>Shoes will be customized by a combination of
                        hand painting, airbrushing, sewing, and dyeing.
                        <br></br>Please allow 6-10 weeks for completion and
                        delivery after order is placed.
                        <br></br>Product will be shipped via USPS, with tracking
                        and signature confirmation.
                        <br></br>All sales are final. No cancellations, refunds,
                        or exchanges once order is processed.
                    </div> */}
                </div>
            </Col>
        </Col>
    );
}
