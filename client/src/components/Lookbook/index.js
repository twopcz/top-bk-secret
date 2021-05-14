import './style.css';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Twelve from '../../assets/lookbook_images/12.png';

export default function Gallery(props) {
    return (
        <Container fluid className="h-100">
            <Row className="h-100 justify-content-center">
                <div className="gallery d-flex flex-column flex-md-row flex-nowrap my-auto">
                    <div className="gallery-item gallery-container px-0">
                        <img
                            className="gallery-image image"
                            src={Twelve}
                            alt="test"
                        ></img>
                        <div class="terms text">
                            <h4>PLEASE READ/PRICING</h4>
                            This is a private look book, please do not share.
                            Link will be active for a limited time.
                            <br></br>
                            Prices are for customization work and shipping only.
                            Base pair must be provided by client; you can either
                            ship your pair to me, or add extra $ for me to
                            purchase based on the shoes current resale rate in
                            your size. Shoes will be sourced from StockX, GOAT,
                            or eBay. Add extra $ for international shipping.
                            Planning to do 1 pair of each for now.
                            <br></br>
                            <br></br>
                            <h4>HOW TO CLAIM</h4>
                            To claim your pair, send an email to
                            antkai@antkai.com with the idea you’d wish to buy in
                            the subject line. You can include a backup choice in
                            case your first choice was already taken. I’ll let
                            you know if you were the first to claim, and have
                            you send a $150 deposit which will hold your spot in
                            line and go towards your total price.
                            <br></br>
                            Projects may take anywhere from 6-15+ weeks
                            depending on the difficulty of the design, your
                            place in line, my current list prior to presale,
                            etc. I will update you along the way.
                        </div>
                    </div>
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
