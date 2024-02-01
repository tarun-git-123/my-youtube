import React from "react";
import { Link } from "react-router-dom";

const SidebarVideoCard = ({ info }) => {
  const { snippet, statistics, id } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="flex my-2">
      <div className="w-7/12">
        <Link to={"/watch?v=" + id}>
          <img
            className="rounded-lg"
            src={thumbnails.standard.url}
            alt="title"
          />
        </Link>
      </div>
      <div className="w-11/12 mx-2">
        <Link to={"/watch?v=" + id}>
          <div>
            <h1 className="font-medium text-sm text-wrap mt-2">{title}</h1>
            <h1 className=" font-medium text-xs my-2 text-black">
              {channelTitle}
            </h1>
            <h1 className="font-medium text-sm text-gray-600 my-2">
              {statistics.viewCount} views{" "}
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SidebarVideoCard;
