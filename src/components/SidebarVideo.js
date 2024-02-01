import React from "react";
import SidebarVideoCard from "./SidebarVideoCard";
import useVideoContainer from "../utils/useVideoContainer";
const SidebarVideo = () => {
  const videos = useVideoContainer();
  if (videos === null) return <h1>Loading</h1>;
  return (
    <>
      {videos.map((video, index) => (
        <SidebarVideoCard info={video} key={video.id} />
      ))}
    </>
  );
};
export default SidebarVideo;
