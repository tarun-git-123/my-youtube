import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useProfileImage from "../utils/useProfileImage";
import DateAgo from "./DateAgo";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics, id } = info;
  const { channelTitle, title, thumbnails, channelId, publishedAt } = snippet;
  const profile = useProfileImage(channelId);
  // console.log(profile);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(profile===null) return

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
        <div className="w-11/12">
          <div className="flex">
            <img
              alt="profile"
              className="rounded-full h-9 m-2"
              src={profile.default.url}
            />
            <h1 className="font-medium text-md text-wrap">{title}</h1>
          </div>
          <div className="ml-12 my-1">
            <h1 className=" font-medium text-sm text-gray-500">{channelTitle}</h1>
            <h1 className="font-medium text-sm text-gray-500">
              {statistics.viewCount} views{" "} - <DateAgo date={publishedAt}/>
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
