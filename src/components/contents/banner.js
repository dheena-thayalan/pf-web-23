/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import DataHelper from "../../utils/DataHelper";
import DeenaCe from "../../assets/videos/dheena_ce.mp4";

function Banner() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayIntro = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div
      className="banner-continuer"
      style={{ backgroundImage: `url('assets/banner.gif')` }}
    >
      <div className="banner d-flex-warp">
        <div className={`banner-content ${isVideoPlaying ? "visible" : ""}`}>
          <div
            dangerouslySetInnerHTML={{
              __html: DataHelper?.SECTIONS?.Home?.banner || "",
            }}
          />
          <Button className="btn" onClick={handlePlayIntro}>
            Play Intro
          </Button>
        </div>
        <div className={`intro-video ${isVideoPlaying ? "visible" : ""}`}>
          {isVideoPlaying && (
            <video
              id="background-video"
              autoPlay
              onEnded={() => setIsVideoPlaying(false)}
            >
              <source src={DeenaCe} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
