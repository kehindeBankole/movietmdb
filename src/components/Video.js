import React from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
function Video() {
  const video = useSelector((state) => state.video.video);
  return (
    <div className="wrapper">
      {video.results
        ? video.results.map((d, i) => (
            <div className="mr-3">
              <div className="">
                <ReactPlayer
                  url={` https://www.youtube.com/watch?v=${d.key}`}
                />
              </div>
            </div>
          ))
        : ""}
    </div>
  );
}

export default Video;
