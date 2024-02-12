import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchsSuggestions, setSearchsSuggestions] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cacheDatas = useSelector((store) => store.search.cacheData);
  // console.log(cacheDatas)
  const toggleManuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestion = (event) => {
    // console.log(event);
    setSearchQuery(event.target.innerHTML);
    setShowSuggestions(false);
    navigate('/results?search_query='+searchQuery)
  };

  useEffect(() => {
    // make an api call
    // if the difference between 2 api call is < 200ms
    // decline the api call
    const timer = setTimeout(() => {
      if (cacheDatas[searchQuery]) {
        setSearchsSuggestions(cacheDatas[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log("API - " + searchQuery);
    setShowSuggestions(true);
    if (searchQuery === "") {
      setShowSuggestions(false);
    }
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSearchsSuggestions(json[1]);

    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  // console.log(searchsSuggestions);

  // const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
  // console.log(isMenuOpen);

  return (
    <div className="w-full fixed bg-white z-50">
    <div className="grid grid-flow-col py-2 ml-3">
      <div className="flex col-span-1 p-2 z-50">
        <img
          onClick={() => toggleManuHandler()}
          className="h-7 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzhOWn8RgPu2lpStBngDltJYkzmNWXjCsix68kD2ObNk8S-FmYNXmcGEq_v7DcWRNrMo&usqp=CAU"
          alt="hamburgernemu"
        />
        <Link to="/">
        <img
          className="h-7 w-10 ml-2 cursor-pointer"
          src="https://1000logos.net/wp-content/uploads/2017/05/Red-YouTube-logo.png"
          alt="youtube logo"
        />
        </Link>
        <Link to="/"><span className="text-black font-bold text-lg font-[Roboto, fantasy, sans-serif]">MyTube</span></Link>
      </div>
      <div className="col-span-10 ml-48">
        <div className="flex">
          <input
            className="h-10 w-1/2 border border-gray-400 px-6 rounded-s-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="h-10 w-14 border-gray-200 bg-gray-200 rounded-e-full ">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass"/>
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-200 mx-4 relative">
            <FontAwesomeIcon icon="fa-solid fa-microphone" className="h-4 w-4 text-black absolute left-[12px] top-[13px]"/>
          </div>
        </div>
        {showSuggestions && (
          <div className="absolute py-2 bg-white text-black w-[32%] shadow-sm shadow-gray-700 rounded-2xl mt-1">
            <ul>
              {searchsSuggestions &&
                searchsSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className=" hover:bg-gray-200 cursor-pointer px-4 py-1"
                    onClick={(event) => handleSuggestion(event)}
                  >
                    {suggestion}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 flex mt-2">
      <FontAwesomeIcon icon="fa-regular fa-square-plus" className="h-5 mt-[4px] text-gray-600"/>
        <FontAwesomeIcon icon="fa-regular fa-bell" className="h-5 mt-[4px] mx-7 text-gray-600"/>
        <img
          className="w-7 h-7 rounded-full"
          src="https://yt3.ggpht.com/ylt_oyttut3dH4DzjORG7B5G7Qc8fpAf3aDZAdtSfv_SAh_3NGcRd30YVQZd9nWHg3vOrQbFLA=s88-c-k-c0x00ffffff-no-rj"
          alt="user icon"
        />
      </div>
    </div>
    </div>
  );
};

export default Head;
