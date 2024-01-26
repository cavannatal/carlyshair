import React from "react";
import GalleryCarousal from "./GalleryCarousal";
import image1 from '../images/content/galleryimages/image1.png';
import image2 from '../images/content/galleryimages/image2.png';
import image3 from '../images/content/galleryimages/image3.JPG';
import image4 from '../images/content/galleryimages/image4.jpg';
import image5 from '../images/content/galleryimages/image5.png';
import image6 from '../images/content/galleryimages/image7.jpg';
import image7 from '../images/content/galleryimages/haley.jpg';

const Gallery = () => {
    return (
        <div className='md:px-5 p-4 pt-10 max-w-screen-2xl mx-auto mt-100'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
                <div className="lg:w-1/3 pl-1 text-left">
                    <h2 className='pt-10 pb-2 text-4xl font-bold text-custom-darkpurple'>Let Me Help You Achieve Your Dream Look!</h2>
                    <p className='pt-10 text-xl font-semibold'>Whether you're envisioning a bold new color, a refined trim, or a transformative hair journey, I'm dedicated to making your hair goals a reality. Together, we'll create a look that not only suits your style but also elevates your confidence</p>
                </div>

                {/** Client Cards */}
                <div className='w-full lg:w-3/4'>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>

                        {/** Example Client Card */}
                        <div className='bg-blue rounded-[35px] h-100 shadow-2xl p-8 flex justify-center items-center transition-all duration-300 hover:-translate-y-4 cursor-pointer'>
                            <div className='text-center'>
                                <img src={image4} className='object-scale-down h-67.5 w-72 rounded-3xl mx-auto' alt=''/>
                                <h3 className='text-black text-l font-semibold px-5 py-2 text-center pt-2'>High Impact Low Maintence Blonde of your Dreams!</h3>
                            </div>
                        </div>

                        <div className=' rounded-[35px] h-100 shadow-2xl p-8 flex justify-center items-center transition-all duration-300 hover:-translate-y-4 cursor-pointer'>
                            <div className='text-center'>
                                <img src={image7} className='object-scale-down h-67.5 w-72 rounded-3xl mx-auto' alt=''/>
                                <h3 className='text-black text-l font-semibold px-5 text-center pt-2'>Achieve Extra Volume with Seamless 20" Extensions Install!</h3>
                            </div>
                        </div>

                        <div className='bg-blue rounded-[35px] h-100 shadow-2xl p-8 flex justify-center items-center transition-all duration-300 hover:-translate-y-4 cursor-pointer'>
                            <div className='text-center'>
                                <img src={image6} className='object-scale-down h-67.5 w-72 rounded-3xl mx-auto' alt=''/>
                                <h3 className='text-black text-l font-semibold px-5 text-center pt-2'>Keep it Natural with a Lived In Look!</h3>
                            </div>
                        </div>

                        {/** Add other cards as needed */}
                    </div>
                </div>
            </div>

            <GalleryCarousal/>
        </div>
    )        
}

export default Gallery;