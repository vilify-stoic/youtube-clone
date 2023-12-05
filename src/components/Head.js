import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import {Link} from "react-router-dom";


const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector((store) => store.search)
    const dispatch = useDispatch();

    useEffect(()=> {
        const timer = setTimeout(() =>  {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery]);
            }
            else {
                getSearchSuggestions();
            }
        }, 200);
            
        return () => {
            clearTimeout(timer);
        };
       
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const data =  await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data?.json();
        setSuggestions(json[1]);

        // dispatch an action
        dispatch(
            cacheResults({
                [searchQuery]:json[1],
            })
        );
    };

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return <>
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex col-span-1"> 
            <img
            onClick={() => toggleMenuHandler()}
            className="h-8 cursor-pointer" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRmql1IlYQ7G8FwulGnNUkTmJLlUpzrkpsow&usqp=CAU" 
            alt="menu" 
            />
            <a href="/">
                <img 
                className="h-8 mx-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png" 
                alt="youtube-logo" />
            </a>
        </div>
        <div className="col-span-10 px-10">
            <div>
                <input 
                    className="px-5 w-1/2 border border-gray-400 p-2 rounded-s-full"
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus = {() => setShowSuggestions(true)}    
                />
                <button className="border border-gray-400 p-2 rounded-e-full bg-gray-100" 
                    onClick={() => setShowSuggestions(false)}
                >
                    <Link to={"/results?search_query=" + searchQuery} >
                        Search
                    </Link>
                </button>
            </div>
            {showSuggestions && (
                <div className="absolute bg-white py-2 px-5 w-1/3 rounded-lg shadow-lg border border-gray-100">
                    <ul>
                    {suggestions.map((suggestion) => (
                        <Link to={"/results?search_query=" + suggestion} >
                        <li
                            className="py-2 px-3 shadow-sm hover:bg-gray-100"
                            onClick={() => {
                                setShowSuggestions(false);
                                setSearchQuery(suggestion);
                                }
                            }
                        >
                            {suggestion}
                         </li>
                    </Link>         
                    ))}
                    </ul>
                </div>
                )}
        </div>

        <div className="col-span-1">
            <img
            className="h-8" 
            src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" 
            alt="user" />
        </div>
    </div>
    </>
}

export default Head;