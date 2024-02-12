import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // const closeMenu = useSelector((store)=>store.app.closeMenu);
  // early return pattern
  // if (!closeMenu) return null
  console.log(isMenuOpen);
  return (
    <div
      className={
        !isMenuOpen ? "w-[5%] fixed top-[8%]" : "w-[15%] h-[90vh] font-normal text-base overflow-y-scroll fixed top-[8%]"
      }
    >
      <div>
        <ul className="ml-1">
          <li className="p-[6px] my-2 hover:bg-gray-200 rounded-md">
            <div>
              <FontAwesomeIcon icon="fa-solid fa-house" className="ml-4" />
              <span className={!isMenuOpen ? "hidden" : "visible ml-7"}>
                Home
              </span>
            </div>
            <div>
              <p className={!isMenuOpen ? "visible text-xs ml-2" : "hidden"}>
                Home
              </p>
            </div>
          </li>

          <li className="p-[6px] hover:bg-gray-200 rounded-md">
            <div className="flex">
              <img
                className="h-6 w-6 ml-3"
                src="https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png"
                alt="short"
              />
              <span className={!isMenuOpen ? "hidden" : "visible ml-6"}>
                Shorts
              </span>
            </div>
            <div>
              <p className={!isMenuOpen ? "visible text-xs ml-2" : "hidden"}>
                Shorts
              </p>
            </div>
          </li>

          <li className="p-[6px] my-1 hover:bg-gray-200 rounded-md">
            <div className="flex">
              <img
                className="h-5 w-5 ml-3"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNazF6M9GC_neiUdmdjWEwrTXGphpRc23L4FrG3ufZM_NCbqtguqS0A_wzK3xUPCfSHc0&usqp=CAU"
                alt="short"
              />
              <span className={!isMenuOpen ? "hidden" : "visible ml-7"}>
                Subscriptions
              </span>
            </div>
            <div>
              <p className={!isMenuOpen ? "visible text-xs" : "hidden"}>
                Subscriptions
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className={!isMenuOpen ? "hidden" : "visible border border-t-0 mt-4"}></div>

      <div className={!isMenuOpen ? "hidden" : "visible"}>
        <ul className="ml-1">
          <li className="p-[6px] my-2 hover:bg-gray-200 rounded-md">
            <div>
              <FontAwesomeIcon icon="fa-regular fa-user" className="ml-3" />
              <span className={!isMenuOpen ? "hidden" : "visible ml-7"}>
                Your channel
              </span>
            </div>
          </li>

          <li className="p-[6px] my-2 hover:bg-gray-200 rounded-md">
            <div className="flex">
              <FontAwesomeIcon
                icon="fa-solid fa-clock-rotate-left"
                className="ml-3 mt-1"
              />
              <span className={!isMenuOpen ? "hidden" : "visible ml-7"}>
                History
              </span>
            </div>
          </li>

          <li className="p-[6px] my-1 hover:bg-gray-200 rounded-md">
            <div className="flex">
              <FontAwesomeIcon icon="fa-solid fa-tv" className="ml-3 mt-1" />
              <span className={!isMenuOpen ? "hidden" : "visible ml-6"}>
                Your videos
              </span>
            </div>
          </li>

          <li className="p-[6px] my-1 hover:bg-gray-200 rounded-md">
            <div className="flex">
              <FontAwesomeIcon
                icon="fa-regular fa-clock"
                className="ml-3 mt-1"
              />
              <span className={!isMenuOpen ? "hidden" : "visible ml-7"}>
                Watch later
              </span>
            </div>
          </li>

          <li className="p-[6px] my-1 hover:bg-gray-200 rounded-md">
            <div className="flex">
              <FontAwesomeIcon
                icon="fa-regular fa-thumbs-up"
                className="ml-3 mt-1"
              />
              <span className={!isMenuOpen ? "hidden" : "visible ml-6"}>
                Liked videos
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div className={!isMenuOpen ? "hidden" : "visible border border-t-0 mt-4"}></div>

      <div className={!isMenuOpen ? "hidden" : "visible"}>
        <h1 className="my-4 ml-4 font-medium">Explore</h1>
        <ul className="ml-1">
          <li className="p-[6px] my-1 hover:bg-gray-200 rounded-md">
            <div>
              <FontAwesomeIcon
                icon="fa-solid fa-location-arrow"
                className="ml-3"
              />
              <span className={!isMenuOpen ? "hidden" : "visible ml-7"}>
                Tranding
              </span>
            </div>
          </li>

          <li className="p-[6px] hover:bg-gray-200 rounded-md">
            <div className="flex">
              <FontAwesomeIcon
                icon="fa-solid fa-bag-shopping"
                className="ml-3 mt-1"
              />

              <span className={!isMenuOpen ? "hidden" : "visible ml-7"}>
                Shopping
              </span>
            </div>
          </li>

          <li className="p-[6px] my-0 hover:bg-gray-200 rounded-md">
            <div className="flex">
              <FontAwesomeIcon icon="fa-solid fa-music" className="ml-3 mt-1"/>
              <span className={!isMenuOpen ? "hidden" : "visible ml-7"}>
                Music
              </span>
            </div>
          </li>

          <li className="p-[6px] my-1 hover:bg-gray-200 rounded-md">
            <div className="flex">
            <FontAwesomeIcon icon="fa-solid fa-film" className="ml-3 mt-1"/>
              <span className={!isMenuOpen ? "hidden" : "visible mx-7"}>
                Movies
              </span>
            </div>
          </li>

          <li className="p-[6px] my-1 hover:bg-gray-200 rounded-md">
            <div className="flex">
            <FontAwesomeIcon icon="fa-solid fa-wifi" className="ml-3 mt-1"/>
              <span className={!isMenuOpen ? "hidden" : "visible mx-7"}>
                Live
              </span>
            </div>
          </li>

          <li className="p-[6px] my-1 hover:bg-gray-200 rounded-md">
            <div className="flex">
            <FontAwesomeIcon icon="fa-solid fa-gamepad" className="ml-3 mt-1"/>
              <span className={!isMenuOpen ? "hidden" : "visible mx-7"}>
                Gamming
              </span>
            </div>
          </li>

          <li className="p-[6px] my-1 hover:bg-gray-200 rounded-md">
            <div className="flex">
            <FontAwesomeIcon icon="fa-regular fa-newspaper" className="ml-[14px] mt-1"/>
              <span className={!isMenuOpen ? "hidden" : "visible mx-7"}>
                News
              </span>
            </div>
          </li>

          <li className="p-[6px] my-1 hover:bg-gray-200 rounded-md">
            <div className="flex">
            <FontAwesomeIcon icon="fa-solid fa-trophy" className="ml-[14px] mt-1"/>
              <span className={!isMenuOpen ? "hidden" : "visible mx-7"}>
                Sports
              </span>
            </div>
          </li>

          <li className="p-[6px] my-1 hover:bg-gray-200 rounded-md">
            <div className="flex">
            <FontAwesomeIcon icon="fa-regular fa-lightbulb" className="ml-[14px] mt-1"/>
              <span className={!isMenuOpen ? "hidden" : "visible mx-7"}>
                Learning
              </span>
            </div>
          </li>

          <li className="p-[6px] my-1 hover:bg-gray-200 rounded-md">
            <div className="flex">
            <FontAwesomeIcon icon="fa-solid fa-podcast" className="ml-[14px] mt-1"/>
              <span className={!isMenuOpen ? "hidden" : "visible mx-7"}>
                Podcasts
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div className={!isMenuOpen ? "hidden" : "visible border border-t-0 mt-4"}></div>
      <div className={!isMenuOpen ? "hidden" : "visible"}>
        <p className="mx-4 text-black my-3">
          Disclamer! This is just for Learning purpose, I have used the Google Youtube API to fetch the data.
        </p>
        <h1 className="text-sm font-normal ml-4 my-4">© 2024 Youtube LLC</h1>
      </div>
    </div>
  );
};

export default Sidebar;
