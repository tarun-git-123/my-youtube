import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
  
  return (
    <div className={!isMenuOpen? 'w-[95%] top-[8%] left-[5%] z-0 absolute': ' w-[85%] z-0 absolute top-[8%] left-[15%]'}>
      <ButtonList />
      <VideoContainer/>
    </div>
  );
};

export default MainContainer;
