import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import {addMessage} from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';


const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);

    const [liveMessage, setLiveMessage] = useState("");

    useEffect(() => {
        const i = setInterval(() => {
            //API Polling

            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20)
                })
            );
        }, 2000);

        return () => clearInterval(i);
    },[])

    return (
        <>
            <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
                <div>
                    {
                        chatMessages.map((message, index) => (<ChatMessage key= {index} name={message.name} message={message.message}/> ))
                    }
                </div>
                
            </div>
            <form className="w-full ml-2 p-2 border border-black" onSubmit={(e) => {
                e.preventDefault();
                dispatch(addMessage({
                    name: "Shushant",
                    message:liveMessage,
                    }) 
                )
                setLiveMessage("");
                }
            }>
                <input 
                    type="text" 
                    className='w-96 p-2' 
                    value={liveMessage} 
                    onChange={(e) => {
                        setLiveMessage(e.target.value);
                    }}
                />
                <button className='px-2 mx-2 bg-green-100'>Send</button>
            </form>
        </>
    )
}

export default LiveChat;