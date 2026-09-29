import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section className="home-hero">
            <h2>Welcome to my portfolio</h2>

            <p className="home-intro">
                Hi, I'm Jason an AI Software Engineering student at Centennial College building different projects as I learn.
            </p>

            <p className="home-mission">
                <strong>My mission:</strong> to turn the things I am learning in my education into real, working software, solving practical problems, and growing into a developer who builds things people genuinely use.
            </p>

            {/* Buttons to navigate to other pages*/}
            <div className="home-actions">
                <Link to="/about" className="btn btn-primary">About Me</Link>
                <Link to="/project" className="btn">View My Projects</Link>
                <Link to="/contact" className="btn">Contact</Link>
            </div>
        </section>
    );
}
