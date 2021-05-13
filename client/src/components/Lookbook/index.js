import './style.css';
import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default function Gallery(props) {
    return (
        <Container fluid className="h-100">
            {/* <Row>
                <div>
                    PLEASE READ/PRICING This is a private look book please do
                    not share or post on social media. Prices are for
                    customization work and shipping only. Base pair must be
                    provided by customer; you can either ship your pair to
                    me,  or add extra $ for me to purchase based on the shoes
                    current resale rate in your size.  Shoes will be sourced
                    from StockX, GOAT, or eBay. Planing to do 1 pair of each for
                    now.
                </div>
            </Row> */}
            <Row className="h-100 justify-content-center">
                <div className="gallery d-flex flex-column flex-md-row flex-nowrap my-auto">
                    {props.images.map((image, index) => (
                        <div
                            className="gallery-item gallery-container px-0"
                            key={`gallery-${index}`}
                        >
                            <img
                                className="gallery-image image"
                                src={image.img}
                                alt={image.alt}
                            ></img>
                            <div class="middle">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: image.desc
                                    }}
                                    class="text"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Row>
        </Container>
    );
}
