import '../../styles/components/_videoSection.scss'
const VideoSection = () => {
  return (
    <div className="video-section">
      <video controls className="video-player">
        <source src="path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
    </div>
  );
};

export default VideoSection;
