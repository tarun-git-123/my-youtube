import React from "react";
import { Link } from "react-router-dom";
import DateAgo from "./DateAgo";
import useProfileImage from "../utils/useProfileImage";
const ResultVideoCard = ({ info }) => {
  const { snippet, id } = info;
  const { channelTitle, title, thumbnails, publishedAt, channelId } = snippet;
  const profile = useProfileImage(channelId);
  if(profile===null){ return <h1>Loading</h1>}
//   console.log(info);
    // console.log(profile);
  return (
    <div className="flex my-3">
      <div className="w-4/12">
        <Link to={"/watch?v=" + id.videoId}>
          <img
            className="rounded-lg"
            src={thumbnails.medium.url}
            alt="title"
          />
        </Link>
      </div>
      <div className="w-8/12 mx-2">
        <Link to={"/watch?v=" + id.videoId}>
          <div>
            <h1 className="font-medium text-sm text-wrap mt-2">{title}</h1>
            <div className="flex">
                <img
                alt="profile"
                className="rounded-full h-9 m-2"
                src={profile.default.url}
                />
                <h1 className=" font-medium text-xs my-4 text-black">
                {channelTitle}
                </h1>
            </div>
            
            {/* {<h1 className="font-medium text-sm text-gray-600 my-2">
              {statistics.viewCount} views{" "} - <DateAgo date={publishedAt}/>
            </h1>} */}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ResultVideoCard;
