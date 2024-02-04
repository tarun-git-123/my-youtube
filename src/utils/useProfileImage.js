import { useEffect, useState } from 'react';
import { YOUTUBE_PROFILE_IMAGE } from './constant';

const useProfileImage = (channelId) => {
    const [profile, setProfile] = useState(null);
    useEffect(()=>{
        getProfileImage();
    },[channelId]);

    const getProfileImage = async()=>{
        const data = await fetch(YOUTUBE_PROFILE_IMAGE + channelId);
        const json = await data.json();
        setProfile(json?.items[0]?.snippet.thumbnails);
    }

    return profile;
};

export default useProfileImage;