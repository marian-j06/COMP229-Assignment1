// contact.jsx
// Contact Me page: shows my contact information in a panel.
import React from 'react';

// List of contact details shown in the panel.
const contactDetails = [
    { label: 'Name', value: 'Jason Mariano' },
    { label: 'Email', value: 'jasonmariano92206@gmail.com', href: 'mailto:jasonmariano92206@gmail.com' }, // mailto: opens the visitor's email app
    { label: 'Phone', value: '(647) 615-4185', href: 'tel:+16476154185' }, 
    { label: 'Location', value: 'Toronto, ON, Canada' },
    {
        label: 'LinkedIn',
        value: 'https://Linkedin.com/JasonMariano',           
        href: 'https://www.linkedin.com/in/jason-mariano-96bb742a9/?isSelfProfile=true&trk=public-profile-join-page', 
    },
    {
        label: 'GitHub',
        value: 'github.com/marian-j06',
        href: 'https://github.com/marian-j06',
    },
];

export default function Contact() {
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
                    {/* Loop through each contact detail and create one row for it */}
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
        </section>
    );
}