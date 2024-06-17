import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs library
import "../style/bookStyle.css";

const Book = () => {
    const form = useRef();
    const [popupMessage, setPopupMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const name = formData.get('user_name'); // Adjust this to match your form data names
        const surname = formData.get('user_name'); // Adjust this to match your form data names
        const email = formData.get('from_email'); // Adjust this to match your form data names
        const pickup = formData.get('pickup_location'); // Adjust this to match your form data names
        const dropoff = formData.get('drop_off_location'); // Adjust this to match your form data names
        const time = formData.get('pickup_time'); // Adjust this to match your form data names
        const date = formData.get('pickup_date'); // Adjust this to match your form data names
        const number = formData.get('phone_number'); // Adjust this to match your form data names
        const message = formData.get('message'); // Adjust this to match your form data names

        // Basic form validation
        if (!name || !surname || !email || !message || !pickup || !dropoff || !time || !date || !number) {
            handlePopup('There is a mistake... Check all fields!');
            return;
        }

        // Using emailjs library to send email
        emailjs
            .sendForm('service_q4kh53j', 'template_joddlp8', form.current, 'baHyAG4A8fm5YD1zD')
            .then(
                (result) => {
                    console.log('Email successfully sent!', result.text);
                    handlePopup('Email sent successfully!');
                    form.current.reset(); // Reset form after successful submission
                },
                (error) => {
                    console.error('Email sending failed:', error.text);
                    handlePopup('Failed to send email. Please try again later.');
                }
            );
    };

    const handlePopup = (message) => {
        setPopupMessage(message);
        setTimeout(() => {
            setPopupMessage('');
        }, 3000);
    };

    return (
        <div className="centerBook">
            <h1 className="font">Book Now!</h1>
            <form ref={form} onSubmit={sendEmail} className="inputBox">
                <div className="box1">
                    <div className="rowInput">
                        <div className="columnInput">
                            <label>Name (required)</label>
                            <input id="firstName" className="smallInput" type="text" name="user_name"/>
                        </div>
                        <div className="columnInput">
                            <label>Surname (required)</label>
                            <input id="lastName" className="smallInput" type="text" name="user_surname"/>
                        </div>
                    </div>
                    <label>Email (required)</label>
                    <input id="email" className="bigInput" type="email" name="from_email"/>
                    <label>Your Eircode / Pickup location (required)</label>
                    <input id="pickupLocation" className="bigInput" type="text" name="pickup_location"/>
                    <label>Drop off location (required)</label>
                    <input id="dropOffLocation" className="bigInput" type="text" name="drop_off_location"/>
                    <div className="rowInput">
                        <div className="columnInput">
                            <label>Time (required)</label>
                            <input id="pickupTime" className="smallInput" type="time" name="pickup_time"/>
                        </div>
                        <div className="columnInput">
                            <label>Date (required)</label>
                            <input id="pickupDate" className="smallInput" type="date" name="pickup_date"/>
                        </div>
                    </div>
                </div>
                <div className="box2">
                    <label>Phone number (required)</label>
                    <h5 className="font margin">*Please include your country prefix - eg +353, +0044, +1 etc.</h5>
                    <input id="phoneNumber" className="bigInput" type="text" name="phone_number" />
                    <label>Your message (optional)</label>
                    <textarea id="message" className="textArea" name="message"></textarea>
                </div>
                <button className="bookNowBtn" type="submit">Book Now!</button>
            </form>
            {popupMessage && <div className="popup">{popupMessage}</div>}
        </div>
    );
};

export default Book;
