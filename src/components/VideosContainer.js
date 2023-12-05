import React, { useEffect, useState } from "react";
import {YOUTUBE_VIDEOS_API} from "../utils/constants"
import VideoCard from "./VideoCard";
import {Link} from "react-router-dom";

const VideoContainer = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data?.json();
        setVideos(json?.items);
    }

    if (!videos || videos.length === 0) {
        return <div>ShimmerUI</div>;
      }
      

    return <div className="flex flex-wrap">
        { 
            (videos.map((video) => (
                <Link to={"/watch?v=" + video?.id} key={video?.id}>
                    <VideoCard  info={video}/>
                </Link>
            )))
        }
        
    </div>
}

export default VideoContainer;