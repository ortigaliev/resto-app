import { Container } from "@mui/material";
import React from "react";
import ads_video from "../../../../src/assets/Resto_video.mp4";

export function Advertisements() {
  return (
    <div className="ads_restaurant_frame">
      <video
        className={"ads_video"}
        autoPlay={true}
        loop
        muted
        playsInline
        data-video-media=""
      >
        <source src={ads_video} />
      </video>
    </div>
  );
}
