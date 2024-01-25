import React, { useState } from 'react';

// css
import '../css/VideoPlayer.css';

const VideoPlayer = ({ s3VideoUrl, youtubeVideoId }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePreviewClick = () => {
    setShowPopup(true);
  };

  const handleOverlayClick = (e) => {
    // Check if the actual video was clicked
    if (e.target.className === 'youtube-popup-overlay') {
      setShowPopup(false);
    }
  };

  return (
    <div className='video-player'>
      {/* Silent video preview */}
      <div className="video-preview-container">
        <video
          className="video-preview"
          src={s3VideoUrl}
          autoPlay
          muted
          // loopå
          playsInline
          onClick={handlePreviewClick}
        />
        {/* Play button */}
        <div className="video-play-button" onClick={handlePreviewClick}>
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="rgba(0, 0, 0, 0.6)" />
            <polygon points="35,30 75,50 35,70" fill="#fff" />
          </svg>
        </div>
      </div>

      {/* YouTube video popup */}
      {showPopup && (
         <div className="youtube-popup-overlay" onClick={handleOverlayClick}>
            <iframe
                title='Loca AI'
                className='youtube-iframe'
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
