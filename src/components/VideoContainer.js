import useVideoContainer from "../utils/useVideoContainer";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";
const VideoContainer = () => {
  const videos = useVideoContainer();
  if (videos === null) return <div><Shimmer/></div>;
  return (
    <div className="flex flex-wrap my-3">
      {videos.map((video, index) => (
        <VideoCard info={video} key={video.id}/>
      ))}
    </div>
  );
};
export default VideoContainer;
