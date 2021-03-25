import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar.js";
import BookList from "../BookList/BookList.js";
import request from "superagent";
import "./style.css"


class BookSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: ""
        }
    }

    searchBook = (event) => {
        event.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
        })
    }

    handleSearch = (event) => {
        this.setState({ searchField: event.target.value})
        console.log(event.target.value)
    }
 
    

    cleanData = (data) => {
        const cleanedData = data.body.items.map((book) => {
            if(book.volumeInfo.hasOwnProperty['publishedDate'] === false){
                book.volumeInfo['publishedDate'] = '0000';
            }
            else if (book.volumeInfo.hasOwnProperty['imageLinks'] === false) {
                book.volumeInfo['imageLinks'] = { thunbnail: {}}
            }

            return book;
        })

        return cleanedData;
    }

    render() {
      return (
        <div id="container">
          <SearchBar searchBook={this.searchBook} handleSearch={this.handleSearch} />
          <BookList books={this.state.books} />
        </div>
      );
    }
  } 
  
  export default BookSearch;