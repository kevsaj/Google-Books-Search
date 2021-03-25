import React from "react";
import './bookcard.css'

const BookCard = (props) => {
    return(
        <div className="max-w-xs bg-gradient-to-r from-yellow-100 to-green-200 hover:from-blue-400 hover:to-yellow-500 shadow-3xl rounded-2xl overflow-hidden p-5">
            <div className="px-4 py-2">
                <h1 className="text-gray-900 font-semibold text-xl uppercase line-clamp-2">{props.title}</h1>
                <p className="text-gray-600 text-sm mt-1 line-clamp-5">{props.description}</p>
                <h2 className="text-xs tracking-wide font-bold uppercase block font-sans">{props.published}</h2>
            </div>
            <img className="h-40 w-full object-cover mt-2" src={props.image} alt="book"></img>
            <div className="flex items-center justify-between px-6 py-3 mt-1 bg-gray-900">
                <h1 className="text-gray-200 font-bold text-xl line-clamp-1">{props.author}</h1>
                <a href={props.link} className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Book</a>
            </div>
        </div>
    )
}

export default BookCard;