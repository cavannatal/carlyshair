import React from "react";

const AppBtn = () => {

    const scrollToBottom = () => {
        // Scrolls smoothly to the bottom of the page
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }

    return (
        <button 
            onClick={scrollToBottom}
            className='transition btn bg-pink-purple-gradient hover:scale-110 
            text-black text-sm py-3 px-4 mr-3 md:ml-8 rounded md:static'>
            Book Now
        </button>
    )
}

export default AppBtn;