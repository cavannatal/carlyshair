import React from "react";

const BookAppBtn = () => {

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
            className='transition btn bg-[#03FD91] hover:scale-110 hover:bg-[#17D475] 
            text-black py-4 px-6 mr-3 md:ml-8 rounded md:static'>
            Schedule an Appointment Today!
        </button>
    )
}

export default BookAppBtn;