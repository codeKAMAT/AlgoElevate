import React from 'react';

const SessionDetails = ({ session }:any) => {
    return (
        <div className="session-details">
            <h2>Session Details</h2>
            <p>Coach: {session.coach}</p>
            <p>Time: {session.time}</p>
            <p>Agenda: {session.agenda}</p>
            <a href={session.videoLink}>Join Video Call</a>
            <button>Reschedule</button>
            <button>Cancel</button>
        </div>
    );
};

export default SessionDetails;
