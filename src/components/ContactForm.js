import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
    });

    const services = [
        "Blow Out", "Men's Haircut", "Women's Cut (Trim)", "Women's Specialty Cut",
        "All-Over Color", "Color Retouch", "Color & Highlights", "Color & Balayage",
        "Partial Highlight", "Fartial", "Full Highlight", "Halo Placement",
        "Color Blocking", "Global Blonding", "Extra Bowl", "Root Tap",
        "Root melt", "Root Tap or Melt + Tone",
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Using EmailJS to send the form data as an email
        emailjs.sendForm('service_tpx0csm', 'template_z4h2ai9', e.target, 'uG4EegdWGCyy8yZgQ')
            .then((result) => {
                console.log(result.text);
                // Handle email send success (e.g., showing a success message)
            }, (error) => {
                console.log(error.text);
                // Handle email send error (e.g., showing an error message)
            });
    };

    return (
        <div className="max-w-lg mx-auto my-10 shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Contact Me!</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                    <input type="text" name="name" id="name" onChange={handleChange} value={formData.name} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                    <input type="tel" name="phone" id="phone" onChange={handleChange} value={formData.phone} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
                    <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="service" className="block mb-2 text-sm font-medium text-gray-900">Select a Service</label>
                    <select name="service" id="service" onChange={handleChange} value={formData.service} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="text-black bg-pink-purple-gradient hover:scale-110 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;