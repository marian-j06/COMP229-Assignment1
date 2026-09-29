import React from 'react';

const services = [
    {
        title: 'Web Development',
        description:
            'Responsive, multi-page websites and web apps built with HTML, CSS, JavaScript, React, Node.js and MongoDB.',
    },
    {
        title: 'Database Design & SQL',
        description:
            'Relational database design with clear table structures, relationships and SQL queries for reliable data management.',
    },
    {
        title: 'Requirements & Technical Documentation',
        description:
            'Clear SRS documents with use cases, UML, class, sequence and state diagrams that turn ideas into buildable plans.',
    },
    {
        title: 'Application Development',
        description:
            'Object-oriented applications and programs in Java, C# and Python, built with clean, maintainable, well-structured code.',
    },
    {
        title: 'Testing & Debugging',
        description:
            'Finding and fixing bugs, validating inputs, and checking that code behaves correctly across different cases.',
    }
];

export default function Services() {
    return (
        <section className="services-page">
            <h2>Services</h2>

            <p className="services-intro">
                Here's what I can help with. If you have something in mind that isn't listed,
                feel free to reach out.
            </p>

            <ul className="service-grid">
                {services.map((service) => (
                    <li className="service-card" key={service.title}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
