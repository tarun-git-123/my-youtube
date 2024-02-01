import useVideoContainer from "../utils/useVideoContainer";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const videos = useVideoContainer();
  if (videos === null) return <h1>Loading</h1>;
  return (
    <div className="flex flex-wrap my-3">
      {videos.map((video, index) => (
        <VideoCard info={video} key={video.id}/>
      ))}
    </div>
  );
};

export default VideoContainer;
