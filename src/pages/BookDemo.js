import React, { useState, useRef } from 'react';

// css
import '../css/BookDemo.css';

// effect
import useSequentialEffect from '../hooks/useSequentialEffect';


function BookDemo() {

    // sequential effect
    const formRef = useRef(null);
    useSequentialEffect(formRef, '.book-demo-form-item', 100);


    // loading state
    const [isLoading, setIsLoading] = useState(false); 


    // formData
    const [formData, setFormData] = React.useState({
        name: "",
        phone: "",
        email: "",
        company: "",
        message: ""
    });

    // validate form
    const validateForm = () => {
        let missing = [];
        
        if (!formData.name) missing.push("Name");
        if (!formData.email) missing.push("Email");
        if (!formData.phone) missing.push("Phone");
        if (!formData.company) missing.push("Company");

        return missing;
    };

   // handle alert and notification
   const [missingFields, setMissingFields] = useState([]); 
   const [notification, setNotification] = useState(""); 

   // handle form submission
   const handleSubmit = async (e) => {
        e.preventDefault();

        // start loading
        setIsLoading(true);

        // validate form
        const missing = validateForm();

        if (missing.length > 0) {
            setMissingFields(missing);
            setIsLoading(false);
            return;
        }

        // send email
        try {
            const response = await fetch('https://fluo-book-demo.vercel.app/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ formData }),
            });
            if (response.ok) {
                console.log("Email sent successfully!");
            } else {
                console.log("Error sending email.");
                setNotification("Error sending email.");
                setIsLoading(false);
                return
            }
        } catch (error) {
            console.error("There was an error sending the email:", error);
            setNotification("There was an error sending the email.");
            setIsLoading(false);
            return
        }

        // display success message
        setNotification("Thank you for your request! We will get back to you ASAP.");

        // stop loading
        setIsLoading(false);

        // clear form
        setFormData({
            name: "",
            phone: "",
            email: "",
            company: "",
            message: ""
        });
   };

    return (
        <div className='book-demo'>

            {/* title */}
            <div className="book-demo-title">
                Book a Demo
            </div>
            <div className="book-demo-description">
                Fill out the form and we will get back to you ASAP!
            </div>

            {/* form */}
            <form onSubmit={handleSubmit} ref={formRef}>
                <div className='book-demo-form-item'>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="First name"
                    />
                    <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        placeholder="Company"
                    />
                </div>
                <div className='book-demo-form-item'>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="Phone"
                    />
                </div>
                <div className='book-demo-form-item'>
                    <textarea
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Your message"
                    />
                </div>

                {/* button */}
                <button className='book-demo-form-btn'
                        type="submit" >
                    {isLoading ? "Loading.." : 'Send Message'}
                </button>
            </form>

            {/* alert */}
            <div className='book-demo-alert'>
                {/* You can style this div to make the alert more visually appealing */}
                {missingFields.length > 0 && `Please fill out the following fields: ${missingFields.join(', ')}`}
            </div>

            {/* notification */}
            <div className="book-demo-notification">
                {notification}
            </div>
        </div>
    );
}

export default BookDemo;
