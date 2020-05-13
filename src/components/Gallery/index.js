import React from 'react';
import { Row } from 'react-bootstrap';
import lakers from './union-lakers.jpg';

export default function Gallery() {
    return (
        <Row className="h-100 flex-nowrap">
            <div>
                <img
                    className="img-fluid"
                    src={lakers}
                    alt="custom-lakers"
                ></img>
            </div>
            <div>
                <img
                    className="img-fluid"
                    src={lakers}
                    alt="custom-lakers"
                ></img>
            </div>
            <div>
                <img
                    className="img-fluid"
                    src={lakers}
                    alt="custom-lakers"
                ></img>
            </div>
            <div>
                <img
                    className="img-fluid"
                    src={lakers}
                    alt="custom-lakers"
                ></img>
            </div>
            <div>
                <img
                    className="img-fluid"
                    src={lakers}
                    alt="custom-lakers"
                ></img>
            </div>
            <div>
                <img
                    className="img-fluid"
                    src={lakers}
                    alt="custom-lakers"
                ></img>
            </div>
        </Row>
    );
}
