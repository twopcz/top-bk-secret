import './style.css';
import imageData from './imageData';
import React from 'react';
import { Row } from 'react-bootstrap';

export default function Gallery() {
    return (
        <Row className="h-100">
            <div className="gallery d-flex flex-column flex-md-row flex-nowrap mx-2 my-auto">
                {imageData.map((image, index) => (
                    <div className="gallery-item" key={`gallery-${index}`}>
                        <img
                            className="gallery-image"
                            src={image.img}
                            alt={image.alt}
                        ></img>
                    </div>
                ))}
            </div>
        </Row>
    );
}
