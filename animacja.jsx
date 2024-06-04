import React, { useState } from 'react';
import './animacja.css';
import mouseImage from './ratJazz.png';

const RatAnimation = () => {
    const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    const moveImage = () => {
        const newX = Math.floor(Math.random() * window.innerWidth);
        const newY = Math.floor(Math.random() * window.innerHeight);
        setPosition({ x: newX, y: newY });
    };

    return (
        <div>
            <button onClick={moveImage} className="rat-button">Porusz Szczurem</button>
            <img
                src={mouseImage}
                alt="Mouse"
                className="mouse-image"
                style={{ top: position.y, left: position.x }}
            />
        </div>
    );
};

export default RatAnimation;
