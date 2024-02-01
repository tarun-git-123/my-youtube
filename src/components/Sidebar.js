import React from "react";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
  // const closeMenu = useSelector((store)=>store.app.closeMenu);
  // early return pattern
  // if (!closeMenu) return null
  return (
    <div className={!isMenuOpen? 'w-[5%]': 'w-[15%]'}>
      <div>
        <ul className="ml-2">
          <li>Home</li>
          <li>Shorts</li>
        </ul>
        <h1 className="font-bold p-2">Subscription</h1>
        <ul className="ml-2">
          <li>Music</li>
          <li>Music</li>
          <li>Music</li>
          <li>Music</li>
        </ul>

        <h1 className="font-bold p-2">Watch Later</h1>
        <ul className="ml-2">
          <li>Music</li>
          <li>Music</li>
          <li>Music</li>
          <li>Music</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
