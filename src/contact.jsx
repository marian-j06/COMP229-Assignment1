// contact.jsx
// Contact Me page

import React from 'react';
import { useNavigate } from 'react-router-dom';

// List of contact details shown in the panel.
// Items with an "href" are clickable links.
const contactDetails = [
    { label: 'Name', value: 'Jason Mariano' },
    { label: 'Email', value: 'jasonmariano92206@gmail.com', href: 'mailto:jasonmariano92206@gmail.com' }, 
    { label: 'Phone', value: '(647) 615-4185', href: 'tel:+16476154185' }, 
    { label: 'Location', value: 'Toronto, ON, Canada' },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/your-profile',            
        href: 'https://www.linkedin.com/in/your-profile', 
    },
    {
        label: 'GitHub',
        value: 'github.com/marian-j06',
        href: 'https://github.com/marian-j06',
    },
];

export default function Contact() {
    // useNavigate gives us a function to send the user to another page
    const navigate = useNavigate();

    // Runs when the user clicks "Send Message"
    function handleSubmit(event) {
        event.preventDefault(); // stop the browser from reloading the page

        // Read what the user typed, using each input's "name"
        const form = event.target;
        const contactInfo = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            phone: form.phone.value,
            email: form.email.value,
            message: form.message.value,
        };

        // Capture the submitted information (visible in the browser console)
        console.log('Contact form submitted:', contactInfo);
        alert('Thank you, ' + contactInfo.firstName + '! Your message has been received.');

        // Redirect back to the Home page (required by the assignment)
        navigate('/');
    }

    return (
        <section className="contact-page">
            <h2>Contact Me</h2>

            <p className="contact-intro">
                Feel free to reach out about school projects, freelance work, or
                opportunities &mdash; I'm happy to hear from you.
            </p>

            {/* Contact information panel */}
            <div className="contact-panel">
                <h3 className="contact-panel-title">Contact Information</h3>

                <dl className="contact-list">
                    {contactDetails.map((detail) => (
                        <div className="contact-row" key={detail.label}>
                            <dt>{detail.label}</dt>
                            <dd>
                                {/* If the detail has a link, show it as a clickable link; otherwise show plain text */}
                                {detail.href ? (
                                    <a
                                        href={detail.href}
                                        // Website links (http...) open in a new tab; email and phone links do not
                                        target={detail.href.startsWith('http') ? '_blank' : undefined}
                                        rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    >
                                        {detail.value}
                                    </a>
                                ) : (
                                    detail.value
                                )}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>

            {/* Contact form */}
            <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="contact-panel-title">Send Me a Message</h3>

                {/* First and last name side by side */}
                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="firstName">First Name</label>
                        <input id="firstName" name="firstName" type="text" required />
                    </div>

                    <div className="form-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input id="lastName" name="lastName" type="text" required />
                    </div>
                </div>

                <div className="form-field">
                    <label htmlFor="phone">Contact Number</label>
                    <input id="phone" name="phone" type="tel" />
                </div>

                <div className="form-field">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" required />
                </div>

                <div className="form-field">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required />
                </div>

                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </section>
    );
}