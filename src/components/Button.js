import React from  'react'
import {Link} from 'react-router-dom'

const Button = ({name}) => {
 
    return (
        <div>
            <Link to={"/results?button_list=" + name}>
                <button
                    className="px-5 py-2 m-2 bg-gray-200 rounded-lg"
                >
                    {name}
                </button>
            </Link>
        </div>
    )
}

export default Button;