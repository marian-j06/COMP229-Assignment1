import React from 'react';

const education = [
    {
        institution: 'Centennial College',
        credential: 'Advanced Diploma, AI Software Engineering Technology',
        dates: 'Sept 2025 - Apr 2028',
        location: 'Toronto, ON',
        details: '4.0/4.5 GPA',
    },
];

const qualifications = [
    {
        institution: 'Codecademy',
        credential: 'Data and Programming Foundations for AI',
        dates: 'In Progress',
        location: 'Online'
    },
    {
        institution: 'Codecademy',
        credential: 'Python for Programmers',
        dates: 'February 2026',
        location: 'Online'
    },
];

function EntryList({ entries }) {
    return (
        <ul className="edu-list">
            {entries.map((entry) => (
                <li className="edu-entry" key={entry.credential}>
                    <div className="edu-header">
                        <h4 className="edu-credential">{entry.credential}</h4>
                        <span className="edu-dates">{entry.dates}</span>
                    </div>
                    <p className="edu-institution">
                        {entry.institution} &middot; {entry.location}
                    </p>
                    {entry.details && <p className="edu-details">{entry.details}</p>}
                </li>
            ))}
        </ul>
    );
}

export default function Education() {
    return (
        <section className="education-page">
            <h3 className="edu-section-title">Educational Qualifications</h3>
            <EntryList entries={education} />

            <h3 className="edu-section-title">Professional Qualifications</h3>
            <EntryList entries={qualifications} />
        </section>
    );
}
