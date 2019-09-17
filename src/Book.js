import React, { Component } from 'react';


class Book extends Component {

    shelfChangerhandle = (event) => {    
        this.props.shelfChanger(this.props.book, event.target.value)
    }


    
    render() {

        const { books, book } = this.props;

        let shelf = "none"
                
        books.forEach(booki => {
            if (booki.id === book.id) {
                shelf = booki.shelf
            }
        });

        return(
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" 
                        style={{ width: 128, height: 193, backgroundImage: 'url(' + book.imageLinks.thumbnail + ')' }}
                    ></div>
                    <div className="book-shelf-changer">
                    <select onChange={this.shelfChangerhandle} value={shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }

}


export default Book;