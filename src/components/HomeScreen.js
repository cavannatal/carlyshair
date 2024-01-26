import React, { useState, useEffect } from "react";
import CarlyPhoto from "../images/content/carly_full.jpg";
import BookAppBtn from './BookAppBtn';
import InstaGHeader from "./InstaGHeader";



const HomeScreen = () => {
    return(
    <div className='md:px-5 p-4 max-w-screen-2xl mx-auto mt-100'>
        <div className='bg-pink-purple-gradient rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
            <div className='flex flex-col md:flex-row-reverse justify-between items center gap-10'>
                {/* Carly Photo */}
                <div>
                    <img src={CarlyPhoto} alt='Carly Headshot' className=' rounded-3xl object-scale-down h-67.5 w-72'/>
                </div>
                
                {/* Banner Content */}
                <div className='md:w-3/5 flex flex-col justify-center'>
                <h2 className='text-7xl font-bold text-white mb-6 leading-[110px]'>Styles by Carly</h2>
                    <p className='text-white text-2xl mb-8'>
                    Come Visit Me at Hair & Co in Fayetteville, Arkansas for an array of stunning blonde, seamlessly blended, and gorgeous hairstyles! I specialize in turning your hair aspirations into reality!</p>
                    <div>
                        {/* Insert Custom Component Right here for Contact Button to scroll down*/}
                        <div className='flex items-center '>
                            <BookAppBtn/>
                            <InstaGHeader/>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomeScreen;