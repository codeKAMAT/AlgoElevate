

const Home = () => {

  return (
  <>
   <div className="welcome-section">
        <h1>Welcome, User!</h1>
        <p>Here’s a snapshot of your progress and upcoming events.</p>
      </div>

      <div className="progress-overview">
        <h2>Progress Overview</h2>
        <div>Course Progress: 80%</div>
        <div>Upcoming Sessions: 3</div>
      </div>

      <div className="upcoming-events">
        <h2>Upcoming Events</h2>
        {/* Add your upcoming events here */}
      </div></>
  );
};

export default Home;
