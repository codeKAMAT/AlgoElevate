import React, { useState } from 'react';
import CoachList from './CoachList';
import ScheduleSession from './ScheduleSession';
import SessionDetails from './SessionDetails';
import FeedbackForm from './FeedbackForm';
import '../../styles/components/_coachBooking.scss'
const CoachBooking = () => {
    const [session, setSession] = useState(null);

    return (
        <div className="coach-booking-page">
            <CoachList />
            <ScheduleSession />
            {session && <SessionDetails session={session} />}
            <FeedbackForm />
        </div>
    );
};

export default CoachBooking;
