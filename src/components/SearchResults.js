import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_DATA_API } from "../utils/constant";
import ResultVideoCard from "./ResultVideoCard";
const SearchResults = () => {
  const [searchInfo, setSearchInfo] = useState(null);
  const [searchParam] = useSearchParams();
  const search_param = searchParam.get('search_query');

  useEffect( ()=>{
    getSearhData();
  },[search_param]);

  const getSearhData = async()=>{
    const data = await fetch(YOUTUBE_SEARCH_DATA_API+search_param);
    const json = await data.json();
    setSearchInfo(json?.items);
  }

  if(searchInfo===null) return <h1>Loading...</h1>
  console.log(searchInfo)

  return (<div className="w-7/12 m-auto">
      {searchInfo.map((video, index) => (
        <ResultVideoCard info={video} key={video.etag} />
      ))}
  </div>);
};

export default SearchResults;
