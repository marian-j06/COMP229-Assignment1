import React from 'react';

const projects = [
    {
        title: 'GradeBoost AI',
        image: '/projects/gradeboostAI.jpg',
        role: 'Worked with a team of 3 to write the SRS document for GradeBoost AI, a concept for an AI-assisted study tool.',
        outcome: "Delivered a complete SRS document defining the sytstem's ,scope, features, and requirements.",
    },
    {
        title: 'Real Estate Listings Website',
        image: '/projects/RealEstate.jpg',
        role: 'Designed and built a real estate listings website using HTML and CSS.',
        outcome: "Delivered a working multi-page example site showing how an agent's listing, could be organized and presented online.",
    },
    {
        title: 'Car Shop Database',
        image: '/projects/database.jpg',
        role: 'Designed and built a database for a car shop using Oracle SQL Developer. Personally created the tables, relationships, provided sample data, and wrote SQL queries to retrieve and report on shop information.',
        outcome: "Delivereed a working database that organizes the shop's records while answering common business questions through SQL queries.",
    },
];

export default function Project() {
    return (
        <section className="projects-page">
            <h2>My Projects</h2>

            <p className="projects-intro">
                A few of the projects I've worked on, and what I did on each one.
            </p>

            <div className="project-grid">
                {projects.map((project) => (
                    <article className="project-card" key={project.title}>
                        <img
                            className="project-image"
                            src={project.image}
                            alt={`Screenshot of ${project.title}`}
                        />
                        <div className="project-body">
                            <h3>{project.title}</h3>
                            <p>
                                <strong>Role:</strong> {project.role}
                            </p>
                            <p>
                                <strong>Outcome:</strong> {project.outcome}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
