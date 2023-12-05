import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    
    return !isMenuOpen ? null : (
    <div className="p-2 shadow-lg w-48">
        
        <ul>
            <Link to="/"><li>Home</li></Link>
            
            <li>Shots</li>
            <li>Videos</li>
            <li>Movies</li>
        </ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className="font-bold pt-4">Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
    </div>
    )
}

export default SideBar;