import React from "react";

import Button from "./Button";


const ButtonList = () => {
    
    const lists = ["All", "Gaming", "Songs", "Song", "Live", "Soccer", "Cricket", "Cookings", "Valentines"]
    const buttonList = lists.map((list) => (
        <Button name={list} key={list}/>
    ))


    return <div className="flex">
        {buttonList}

    </div>
}

export default ButtonList;