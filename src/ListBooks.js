import React from 'react';
import { Link } from "react-router-dom";
import Book from "./Book";
import PropTypes from 'prop-types';

const ListBooks = ({books, shelfChanger}) => {

  const currentlyReading = books.filter(b => {return b.shelf === 'currentlyReading'})
  const wantToRead = books.filter(b => {return b.shelf === 'wantToRead'})
  const read = books.filter(b => {return b.shelf === 'read'})

  return(
    
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {currentlyReading.map(book => (
                <Book key={book.id} book={book} shelfChanger={shelfChanger} books={books} />
              ))}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {wantToRead.map(book => (
                <Book key={book.id} book={book} shelfChanger={shelfChanger} books={books} />
              ))}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {read.map(book => (
                <Book key={book.id} book={book} shelfChanger={shelfChanger} books={books} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div >
      <Link
        to='/search'
        className="open-search"
      >Add a book</Link>
    </div>
  </div>
  )
}

// 1.
ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  shelfChanger: PropTypes.func.isRequired,
}

export default ListBooks;
