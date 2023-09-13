import React, { useState } from 'react'

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

        
    if (imgSrc === ""){
        return (<></>)
    }


    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                perspective: '1500px', // Adjust the perspective depth as needed
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                style={{
                    width: '50%',
                    height: '50%',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    transform: `rotateX(${isMouseOver ? mousePosition.x : 0}deg) rotateY(${isMouseOver ? -mousePosition.y : 0}deg)`,
                    transition: 'transform 0s ease-out',

                }}
            >
                <div
                style={{
                    borderRadius: "10px",
                    boxShadow: `${mousePosition.y}px ${mousePosition.x}px 20px 1px #a8a8a8`,
                }}
                >

                
                <CardMedia
                style={{
                    borderRadius: "10px",
                    border: "solid #a8a8a8",
                    borderWidth: "2px"
                }}
                    component="img"
                    image={imgSrc}
                    lt="projTemp"
                />
                </div>
            </div>
        </div>
    );
}