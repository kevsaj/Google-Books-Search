import React from "react";
import BookCard from "../BookCard/BookCard.js"

const BookList = (props) => {
    try {
        return (
            <div className="container mx-auto mt-10 mb-20">
                <div className="flex flex-row flex-wrap gap-8 justify-center items-center">
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
                </div>
            </div>
        )
    }
    catch{
        return (
            <div className="container mx-auto mt-10 mb-20">
                <div className="flex flex-row flex-wrap gap-8  justify-center items-center">
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
                </div>
            </div>
        )
    }

}

export default BookList;