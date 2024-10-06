import React, { useState } from 'react';

const ScheduleSession = () => {
    const [selectedSlot, setSelectedSlot] = useState(null);

    const timeSlots = ['10:00 AM', '2:00 PM', '4:00 PM'];

    const handleSlotSelect = (slot:any) => {
        setSelectedSlot(slot);
    };

    return (
        <div className="schedule-session">
            <h2>Schedule a Session</h2>
            <div className="time-slots">
                {timeSlots.map((slot, index) => (
                    <button key={index} onClick={() => handleSlotSelect(slot)}>
                        {slot}
                    </button>
                ))}
            </div>
            {selectedSlot && (
                <div>
                    <h3>Selected Time Slot: {selectedSlot}</h3>
                    <button>Confirm Booking</button>
                </div>
            )}
        </div>
    );
};

export default ScheduleSession;
