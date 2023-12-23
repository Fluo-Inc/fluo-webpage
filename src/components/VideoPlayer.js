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
      <video
        className="video-preview"
        src={s3VideoUrl}
        autoPlay
        muted
        // loop
        playsInline
        onClick={handlePreviewClick}
      />

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
