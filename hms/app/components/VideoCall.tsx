"use client";
import React, { useState } from "react";

const VideoCall: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleToggleVideo = () => {
    setIsVideoOn(!isVideoOn);
  };

  return (
    <div className="video-call">
      <div className="video-container">
        {/* Video Stream Placeholder */}
        <video autoPlay playsInline muted={isMuted}></video>
      </div>
      <div className="controls">
        <button className="btn" onClick={handleToggleMute}>
          {isMuted ? "Unmute" : "Mute"}
        </button>
        <button className="btn" onClick={handleToggleVideo}>
          {isVideoOn ? "Stop Video" : "Start Video"}
        </button>
        <button className="btn" onClick={() => console.log("End Call")}>
          End Call
        </button>
      </div>
    </div>
  );
};

export default VideoCall;
