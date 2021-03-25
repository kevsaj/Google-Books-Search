import React from "react";
import BookCard from "../BookCard/BookCard.js"

const BookList = (props) => {
    try {
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    {
                        props.books.map((book, i) => {
                            return <BookCard
                                key={i}
                                image={book.volumeInfo.imageLinks.smallThumbnail}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                published={book.volumeInfo.publishedDate}
                                link={book.volumeInfo.infoLink}
                            />
                        })
                    }
                </div></div>
        )
    }
    catch{
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    {
                        props.books.map((book, i) => {
                            return <BookCard
                                key={i}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                published={book.volumeInfo.publishedDate}
                                link={book.volumeInfo.infoLink}
                            />
                        })
                    }
                </div></div>
        )
    }

}

export default BookList;