import React from "react";

const SearchedVideoCard = ({info}) => {
    const {snippet} = info;
    const {channelTitle,description, title, thumbnails} = snippet;
    return(
        <div className="p-2 mx-2 h-56 flex">
            <img className='rounded-lg w-96' src={thumbnails.high.url} alt="thumbnails" />
            <ul className="px-3 py-1">
                <li className="font-bold "> {title} </li>
                <li className="py-3"> {channelTitle} </li>
                <li> {description} </li>
            </ul>
        </div>
    )
}

export default SearchedVideoCard;