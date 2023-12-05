import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
      <img
            className="h-8" 
            src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" 
            alt="user" 
        />
        <span className="px-2 font-bold"> {name}</span>
        <span>{message}</span>
        
    </div>
  )
}

export default ChatMessage
