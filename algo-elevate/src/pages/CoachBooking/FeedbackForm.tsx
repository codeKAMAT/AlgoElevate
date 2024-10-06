import React, { useState } from 'react';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState('');

    const handleFeedbackSubmit = () => {
        console.log('Feedback submitted:', feedback);
    };

    return (
        <div className="feedback-form">
            <h2>Post-Session Feedback</h2>
            <textarea 
                value={feedback} 
                onChange={(e) => setFeedback(e.target.value)} 
                placeholder="Provide feedback for the coach..."
            />
            <button onClick={handleFeedbackSubmit}>Submit Feedback</button>
        </div>
    );
};

export default FeedbackForm;
