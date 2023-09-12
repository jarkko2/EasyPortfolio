import React, { useState } from 'react'
import image from '../Images/projTemp.png'

// Material UI
import CardMedia from '@mui/material/CardMedia';

export default function PerspectiveCardImage({ imgSrc }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleMouseMove = (e) => {
        const element = e.currentTarget;
        const rect = element.getBoundingClientRect();

        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        const angleX = (offsetY / rect.height - 0.5) * 25;
        const angleY = (offsetX / rect.width - 0.5) * 25;

        setMousePosition({ x: angleX, y: angleY });
    };

    const handleMouseEnter = () => {
        setIsMouseOver(true);
    };

    const handleMouseLeave = () => {
        // Reset the rotation angles gradually over time
        setIsMouseOver(false);
        setMousePosition({ x: 0, y: 0 });
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                perspective: '1500px', // Adjust the perspective depth as needed
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                style={{
                    width: '95%',
                    height: '100%',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    transform: `rotateX(${isMouseOver ? -mousePosition.x : 0}deg) rotateY(${isMouseOver ? mousePosition.y : 0}deg)`,
                    transition: 'transform 0.5s ease-out'
                }}
            >
                <CardMedia
                style={{
                    borderRadius: "10px"
                }}
                    component="img"
                    height="300"
                    image={imgSrc}
                    lt="projTemp"
                />
            </div>
        </div>
    );
}