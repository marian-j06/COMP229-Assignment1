import React from 'react';

const contactDetails = [
    { label: 'Name', value: 'Jason Mariano' },
    { label: 'Email', value: 'jasonmariano92206@gmail.com', href: 'mailto:jasonmariano92206@gmail.com' },
    { label: 'Phone', value: '(647) 615-4185', href: 'tel:+16476154185' },
    { label: 'Location', value: 'Toronto, ON, Canada' },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/your-profile',
        href: 'https://www.linkedin.com/feed/',
    },
    {
        label: 'GitHub',
        value: 'github.com/your-username',
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

            <div className="contact-panel">
                <h3 className="contact-panel-title">Contact Information</h3>

                <dl className="contact-list">
                    {contactDetails.map((detail) => (
                        <div className="contact-row" key={detail.label}>
                            <dt>{detail.label}</dt>
                            <dd>
                                {detail.href ? (
                                    <a
                                        href={detail.href}
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
