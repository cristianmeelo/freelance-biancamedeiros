/* eslint-disable @next/next/no-img-element */
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


interface ProjectsProps { }

export const Projects: React.FC<ProjectsProps> = () => {
    const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => e.preventDefault();

    const items: JSX.Element[] = [
        <img src="/images/carousel1.jpeg" onDragStart={handleDragStart} role="presentation" alt={""} key={1} />,
        <img src="/images/carousel2.jpeg" onDragStart={handleDragStart} role="presentation" alt={""} key={2} />,
        <img src="/images/carousel1.jpeg" onDragStart={handleDragStart} role="presentation" alt={""} key={3} />,
    ];

    return (
        <div className="flex w-full h-full flex-col items-center bg-base_green ">

            <div className="w-1/4 py-12 h-1/3">
                <AliceCarousel
                    mouseTracking
                    items={items}
                    autoPlay
                    autoPlayInterval={1700}
                    disableButtonsControls
                    infinite
                    responsive={{
                        0: { items: 1 },
                        1024: { items: 1 },
                    }}
                />
            </div>
        </div>
    );
};

