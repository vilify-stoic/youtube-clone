import React, {useEffect, useState} from "react";
import { YOUTUBE_SEARCH_KEYWORD_API } from "../utils/constants";
import SearchedVideoCard from "./SearchedVideoCard"
import VideoCard from "./VideoCard";
import { Link, useSearchParams } from "react-router-dom";


const SearchedVideoContainer = () => {


    const [searchParams] = useSearchParams(); 
    const keywordSearch = searchParams.get('search_query');

    const buttonListSearch = searchParams.get('button_list');
    const searchKey = keywordSearch === null ? buttonListSearch : keywordSearch;
    const [searchedVideos, setSearchedVideos] = useState([]);

    useEffect(() => {
        getSearchedVideos(searchKey);
    }, [keywordSearch])

    const getSearchedVideos = async (searchQuery) => {
        const apiURL = YOUTUBE_SEARCH_KEYWORD_API(searchQuery);
        const data = await fetch(apiURL);
        const json = await data?.json();
        setSearchedVideos(json?.items);
    }

    if(!searchedVideos || searchedVideos.length === 0 ) return <div> ShimmerUI </div>

    return(
         <div >
            { 
                buttonListSearch === null ?
                    (
                        searchedVideos.map((searchedVideo) => (
                            <Link to={"/watch?v=" + searchedVideo?.id?.videoId} key={searchedVideo?.id?.videoId}>
                                <SearchedVideoCard info={searchedVideo}/>
                            </Link>
                        ))
                    ) 
                    : 
                    (
                        <div className="flex flex-wrap">
                        {searchedVideos.map((searchedVideo) => (
                            <Link to={"/watch?v=" + searchedVideo?.id} key={searchedVideo?.id?.videoId}>
                                <VideoCard className="flex flex-wrap" info={searchedVideo}/>
                            </Link>
                        ))}
                        </div>
                    )
            }
            
        </div>
    )
}

export default SearchedVideoContainer;