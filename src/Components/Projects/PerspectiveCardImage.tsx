import { useState } from 'react'
import ProjectTypeItem from '../Types/ProjectTypeItem'

// Material UI
import CardMedia from '@mui/material/CardMedia';

export default function PerspectiveCardImage({ item }: { item: ProjectTypeItem }) {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
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


    if (item.imgSrc === "") {
        return (<></>)
    }


    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                perspective: '2000px', // Adjust the perspective depth as needed
                paddingTop: "20px"
            }}
        >
            <div
                style={{
                    width: '50%',
                    height: '50%',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    transform: `rotateX(${isMouseOver ? mousePosition.x : 0}deg) rotateY(${isMouseOver ? -mousePosition.y : 0}deg) scale(${isMouseOver ? 1.3 : 1})`,
                    transition: 'transform 0.1s linear',

                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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
                            borderWidth: "2px",
                            maxHeight: "300px"
                        }}
                        component="img"
                        image={item.imgSrc}
                    />
                </div>
            </div>
        </div>
    );
}