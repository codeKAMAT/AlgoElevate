import React from 'react';

const CoachList = () => {
    const coaches = [
        { name: 'John Doe', rating: 4.8, expertise: 'JavaScript' },
        { name: 'Jane Smith', rating: 4.6, expertise: 'React' },
        // Add more coaches as needed
    ];

    return (
        <div className="coach-list">
            <h2>Available Coaches</h2>
            <ul>
                {coaches.map((coach, index) => (
                    <li key={index}>
                        <h3>{coach.name}</h3>
                        <p>Rating: {coach.rating}</p>
                        <p>Expertise: {coach.expertise}</p>
                        <button>Book Session</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CoachList;
