import React from 'react';
import Gallery from '../Gallery';
import GridGallery from '../GridGallery';
// import Shop from '../Shop';
import './style.css';

export default function Content() {
    return (
        <div className="content-wrapper">
            {/* <GridGallery /> */}
            <Gallery />
        </div>
    );
}
