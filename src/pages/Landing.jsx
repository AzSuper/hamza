import React from "react";
import VideoLayout from "../components/VideoLayout";

const Landing = () => {
  return (
    <div className="landing" id="home">
      <VideoLayout
        src={"assets/video/background.mp4"}
        className="video-home"
        label="background-video"
      />
      <div className="glass"></div>
      <div className="text">
        <div className="content-landing">
          <h1 className="first">Hi there !</h1>
          <h1 className="second">
            We Are HAMZA Group,We Make Art and Quality.
          </h1>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
