import React from 'react';


const commentData = [
        {
            name: "Akshay Saini",
            text: "Lorem test shushant keshari",
            replies: []
        },
        {
            name: "Akshay Saini",
            text: "Lorem test shushant keshari",
            replies: [ 
                { 
                    name: "Akshay Saini",
                    text: "Lorem test shushant keshari",
                    replies: [
                            {
                                name: "Akshay Saini",
                                text: "Lorem test shushant keshari",
                                replies: [
                                    {
                                        name: "Akshay Saini",
                                        text: "Lorem test shushant keshari",
                                        replies : [
                                            {
                                                name: "Akshay Saini",
                                                text: "Lorem test shushant keshari",
                                                replies: [
                                                    {
                                                        name: "Akshay Saini",
                                                        text: "Lorem test shushant keshari",
                                                        replies: [
                                                            {
                                                                name: "Akshay Saini",
                                                                text: "Lorem test shushant keshari",
                                                                replies: []
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        name: "Akshay Saini",
                                                        text: "Lorem test shushant keshari",
                                                        replies: [
                                                            {
                                                                name: "Akshay Saini",
                                                                text: "Lorem test shushant keshari",
                                                                replies: []
                                                            },
                                                        ]
                                                    },
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        name: "Akshay Saini",
                                        text: "Lorem test shushant keshari",
                                        replies: [
                                            {
                                                name: "Akshay Saini",
                                                text: "Lorem test shushant keshari",
                                                replies: []
                                            },
                                        ]
                                    },
                                    
                                ]
                            },
                    ]
                }
            ]
        }
    ];

    


const CommentsList = ({comments}) => {

    return comments.map((comment, index)  => (
        <div key={index}>
            <Comment  data={comment}/>
            <div className='pl-7 border border-l-black'>
                <CommentsList comments={comment.replies}/>
            </div>
       </div>
    ))
};

  

const Comment = ({ data }) => {
    const {name, text } = data;
    return(
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-sm my-2 '>
            <img
                className="w-12 h-12" 
                src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
                alt="user" 
            />
            <div className='px-3 '>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
};

const CommentsContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments: </h1>
            <CommentsList comments={commentData}/>
        </div>
    );
}

export default CommentsContainer;