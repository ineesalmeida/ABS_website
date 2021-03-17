import React from 'react';
import './Gallery.style.css';

export default function Gallery({ images }) {

    let gallery = images.map((value, index) => {
        return (
            <div key={index} className="gallery__item">
                <img src={value} alt={"screenshot_" + index} />
            </div>
        )
    })

    return (
        <div className="gallery">
            {gallery}
        </div>
    )
}

