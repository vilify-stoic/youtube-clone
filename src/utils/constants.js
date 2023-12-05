
const GOOGLE_API_KEY = "AIzaSyCzjfO05vOCdPqDWQBt_MC-piCebPRXTHE"

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;


export const YOUTUBE_SEARCH_API =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";


export const OFFSET_LIVE_CHAT = 10;

export const YOUTUBE_SEARCH_KEYWORD_API = (searchQuery) => `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=` + GOOGLE_API_KEY; 