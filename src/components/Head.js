import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchsSuggestions, setSearchsSuggestions] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const cacheDatas = useSelector((store) => store.search.cacheData);
  // console.log(cacheDatas)
  const toggleManuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestion = (event) => {
    // console.log(event);
    setSearchQuery(event.target.innerHTML);
    setShowSuggestions(false);
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
      // getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API - " + searchQuery);
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

  return (
    <div className="grid grid-flow-col p-3 m-1 shadow-md">
      <div className="flex col-span-1 p-2">
        <img
          onClick={() => toggleManuHandler()}
          className="h-5 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzhOWn8RgPu2lpStBngDltJYkzmNWXjCsix68kD2ObNk8S-FmYNXmcGEq_v7DcWRNrMo&usqp=CAU"
          alt="hamburgernemu"
        />
        <img
          className="h-5 w-28 ml-3 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
          alt="youtube logo"
        />
      </div>
      <div className="col-span-10 ml-48">
        <div className="flex">
          <input
            className="h-9 w-1/2 border border-gray-400 px-6 rounded-s-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="h-9 w-24 border border-gray-400 bg-gray-200 rounded-e-full ">
            Search
          </button>
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

      <div className="col-span-1">
        <img
          className="w-10"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default Head;
