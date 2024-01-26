import React from "react";
import Instagram from '../images/content/instagram_icon.png';

const InstaGHeader = ({ instagramUrl }) => {
    return (
        <a href='https://www.instagram.com/carlycosmeticsxx/?next=%2F' target="_blank" rel="noopener noreferrer" className="inline-block">
            <button className='transition btn hover:text-[#FB6F92] hover:scale-110 text-black text-sm py-4 px-6 mr-3 md:ml-8 rounded md:static flex items-center justify-center'>
                {/* Increase the size of the icon */}
                <img src={Instagram} alt="Instagram" className="mr-2 h-8 w-8" /> 
            </button>
        </a>
    );        
}

export default InstaGHeader;