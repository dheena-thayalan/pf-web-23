/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from "react";
import Button from "../ui/button/index";
import DataHelper from "../../utils/DataHelper";
import DeenaCe from "../../assets/videos/dheena_ce.mp4";
import loading from "../../assets/images/loading.svg";

function Banner() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlayIntro = () => {
    setIsVideoPlaying(true);
    setIsLoading(true);
  };

  const handleVideoLoadedData = () => {
    setIsLoading(false);
  };

  const handleVideoError = () => {
    setIsLoading(false);
  };

  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
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
            <>
              {isLoading && (
                <div className="video-loader">
                  <img src={loading} alt="Loading..." />
                </div>
              )}
              <video
                id="background-video"
                autoPlay
                onLoadedData={handleVideoLoadedData}
                onError={handleVideoError}
                onEnded={handleVideoEnded}
              >
                <source src={DeenaCe} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Banner;
