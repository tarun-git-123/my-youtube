import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_PROFILE_IMAGE, YOUTUBE_WATCH_VIDEOS_API } from "../utils/constant";
import CommentContainer from "./CommentContainer";
import SidebarVideo from "./SidebarVideo";
import Sidebar from "./Sidebar";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [videoInfo, setVideoInfo] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const video_id = searchParam.get("v");

  useEffect(() => {
    getVideo();
    dispatch(closeMenu());
  },[video_id]);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_WATCH_VIDEOS_API + video_id);
    const json = await data.json();
    const data1 = await fetch(YOUTUBE_PROFILE_IMAGE + json?.items[0]?.snippet?.channelId);
    const json1 = await data1.json();
    setProfileImage(json1)
    setVideoInfo(json);
  };


  if (videoInfo === null) return <h1>Loading</h1>;
 
  console.log(videoInfo);

  const { snippet } = videoInfo?.items[0];
  const { channelTitle, title, description } = snippet;

  const { thumbnails  } = profileImage?.items[0].snippet;

  return (
    <>
      <div className="flex my-2">
        {isMenuOpen && <Sidebar/>}
        <div className={!isMenuOpen ? "w-[60%] ml-[5%]" : "w-[60%]"}>
          <div className="rounded-xl">
            <iframe
              width="100%"
              height="500px"
              src={
                "https://www.youtube.com/embed/" +
                video_id +
                "?si=hE52DayjZHVz21Pz"
              }
              title="YouTube video player"
              frameBorder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h1 className="font-bold text-xl mt-2">{title}</h1>
          </div>
          <div className="flex">
          <img
              alt="profile"
              className="rounded-full h-10 m-1"
              src={thumbnails.default.url}
            />
            <h1 className="font-medium text-lg my-2">{channelTitle}</h1>
            <button className=" bg-black text-white rounded-full py-1.5 my-1 px-5 ml-10">
              Subscribe
            </button>
          </div>
          <div className="bg-gray-300 p-3 text-wrap rounded-xl my-2 flex-col">
            <p>{description}</p>
          </div>
          <div>
            <h1 className="font-bold text-lg">Comments</h1>
          </div>
          <div className="my-3 flex">
            <img
              alt="profile"
              className="rounded-full h-11"
              src="https://yt3.ggpht.com/ylt_oyttut3dH4DzjORG7B5G7Qc8fpAf3aDZAdtSfv_SAh_3NGcRd30YVQZd9nWHg3vOrQbFLA=s88-c-k-c0x00ffffff-no-rj"
            />
            <input
              type="text"
              placeholder="Enter Comment here"
              className=" border-b-gray-500 px-5 border-b outline-none w-[100%]"
            />
          </div>
          <div>
            <CommentContainer />
          </div>
        </div>
        <div className="w-[30%] mx-5">
          <LiveChat/>
          <SidebarVideo/>
        </div>
      </div>
    </>
  );
};

export default WatchPage;
