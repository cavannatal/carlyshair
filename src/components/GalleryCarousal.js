import React from 'react';
import image1 from '../images/content/NewGal/a1.JPG';
import image2 from '../images/content/NewGal/a2.JPG';
import image3 from '../images/content/NewGal/a3.jpg';
import image4 from '../images/content/NewGal/a4.jpg';
import image5 from '../images/content/NewGal/a5.jpg';
import image7 from '../images/content/NewGal/a6.jpg';

const slides = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image7,
];

export default function GalleryGrid() {
    return (
        <div className='max-w-[800px] m-auto py-16 px-4'>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
                {slides.map((slide, index) => (
                    <div key={index} className='w-full h-96 rounded-xl bg-cover bg-center duration-500' style={{ backgroundImage: `url(${slide})` }}></div>
                ))}
            </div>
        </div>
    );
}