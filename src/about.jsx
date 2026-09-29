import React from 'react';

export default function About() {
    return (
        <section className="about-page">
            <h2>About Me</h2>

            <img
                className="about-photo"
                src="/profile-photo.jpg"
                alt="Photo of Jason Mariano"
            />

            <p className="about-name">Jason Mariano</p>

            <p className="about-bio">
                I'm an AI Software Engineering student at Centennial College with a strong
                interest in building software that solves real problems. Most of what I know
                comes from a mix of coursework and personal projects &mdash; I like starting
                with something small that works and improving it from there. Right now I'm
                focused on web development with React, and I'm always looking for the next
                project that pushes me a little past what I already know.
            </p>

            <a
                className="btn btn-primary"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                View My Resume (PDF)
            </a>
        </section>
    );
}
