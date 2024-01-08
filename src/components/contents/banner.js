/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from "react";
import Button from "../ui/button/index";
import DataHelper from "../../utils/DataHelper";
import DeenaCe from "../../assets/videos/dheena_ce.mp4";

function Banner() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayIntro = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="banner-continuer" id="home">
      <div className="banner d-flex-warp">
        <div className={`banner-content ${isVideoPlaying ? "visible" : ""}`}>
          <div
            dangerouslySetInnerHTML={{
              __html: DataHelper?.SECTIONS?.home?.banner || "",
            }}
          />
          <Button label="Play Intro" type="button" onClick={handlePlayIntro} />
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
    </section>
  );
}

export default Banner;
