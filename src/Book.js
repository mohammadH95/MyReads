import React from 'react';
import PropTypes from 'prop-types';

const Book = ({books, book, shelfChanger, change}) => {

    const noImage = 'https://books.google.com/googlebooks/images/no_cover_thumb.gif'

    const shelfChangerhandle = (event) => {
        shelfChanger(book, event.target.value)
    }


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
                    style={{ width: 128, height: 193, backgroundImage: 'url(' + (book.imageLinks.thumbnail
                    ? book.imageLinks.thumbnail
                    : noImage) + ')' }}
                ></div>
                <div className="book-shelf-changer">
                    <select onChange={shelfChangerhandle} value={shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading" >Currently Reading</option>
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

Book.propTypes = {
    book: PropTypes.object.isRequired,
    shelfChanger: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
}


export default Book;