import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  const { snippet, statistics, id } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return pattern
  const videoClass = !isMenuOpen
    ? "w-[23.7%] mx-2 mb-10"
    : "w-[23.5%] mx-2 mb-10";
  return (
      <div className={videoClass}>
        <Link to={"/watch?v=" + id}>
          <img
            className="rounded-lg w-full"
            src={thumbnails.medium.url}
            alt="title"
          />
        </Link>
        <Link to={"/watch?v=" + id}>
          <div className="w-10/12">
            <h1 className="font-medium text-md text-wrap">{title}</h1>
            <h1 className=" font-medium text-md text-gray-600">
              {channelTitle}
            </h1>
            <h1 className="font-medium text-sm text-gray-600">
              {statistics.viewCount} views{" "}
            </h1>
          </div>
        </Link>
      </div>
  );
};


export default VideoCard;
