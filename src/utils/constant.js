// AIzaSyAPyPNizyY66FTeqmCy8XIqMIhwXW7b1jQ\
// AIzaSyAyL5RGrdyWJ7YQ8jJpCoHC3qJxMvMhP2s
// AIzaSyDL5g_Z5aRZ2mcpd8XfToCaWdkAFyYUrsA--new account
const GOOGLE_API_KEY = "AIzaSyBbBth4i1H8dsDfaqOKC4kJETopnP60y1k";


export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_WATCH_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_PROFILE_IMAGE =
  "https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items(id%2Csnippet%2Fthumbnails)&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const YOUTUBE_SEARCH_DATA_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  GOOGLE_API_KEY+"&q=";
