import { useEffect,useState } from 'react';
import { YOUTUBE_VIDEOS_API } from './constant';
const useVideoContainer = () => {
    const [videos, setVideos] = useState(null);
    useEffect(() => {
      setTimeout(() => {
        getVideos();
      }, 2000);
      
    }, []);
  
    const getVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json?.items);
    };
    return videos;
};

export default useVideoContainer;